import {BrowseFontsPage} from '../../../page-objects/main-page'

describe('Browse Fonts - Search functionality', () => {
    const browsePage = new BrowseFontsPage()

    beforeEach(() => {
        browsePage.navigateToTestSite()    
    })
    
    it('Should display all the results for the open source catalog', () => {
        browsePage.totalResultsDisplayed('987') //I need a harcoded number since the fonts are being displayed dinamically on the page.
        browsePage.checkFirstResult('Roboto')
    })

    it('Should search for a valid font name in the open source catalog', () => {
        browsePage.searchFont('robot')
        browsePage.totalResultsDisplayed('4')
        browsePage.checkFirstResult('Roboto')
    })

    it('Should return a result for a complex search', () => {
        browsePage.searchFont('Baloo Chettan 2')
        browsePage.totalResultsDisplayed('1')
        browsePage.checkFirstResult('Baloo Chettan 2')
    })

    it('Should search for a partial font name in the open source catalog', () => {
        browsePage.searchFont('robo')
        browsePage.totalResultsDisplayed('4')
        browsePage.checkFirstResult('Roboto')
    })

    it('Should search for a partial font/author name in the open source catalog', () => {
        browsePage.searchFont('rob')
        browsePage.totalResultsDisplayed('6')
        browsePage.checkFirstResult('Roboto')
    })

    it('Should search for author name', () => {
        browsePage.searchFont('rob jelinski')
        browsePage.totalResultsDisplayed('1')
        browsePage.checkFirstResult('Beth Ellen')
        browsePage.checkAuthorName('Rob Jelinski')
    })

    it('Should search for partial author name', () => {
        browsePage.searchFont('rob jel')
        browsePage.totalResultsDisplayed('1')
        browsePage.checkFirstResult('Beth Ellen')
        browsePage.checkAuthorName('Rob Jelinski')
    })

    it('Should search for a valid font name in the external foundries', () => {
        browsePage.searchFont('cacao')
        browsePage.noResultsInOSCatalogTxt()
        browsePage.checkFirstResult('Cacao')
    })

    it('Should not display results for an invalid font', () => {
        browsePage.searchFont('11&A-=')
        browsePage.showsCatalogError()
    })

    it('Should clear the filters by using the button for an empty search result', () => {
        browsePage.searchFont('11&A-=')
        browsePage.clearResultError()
        browsePage.totalResultsDisplayed('987')
        browsePage.checkFirstResult('Roboto') 
    })

    it.only('Should be able to use the "Show only variable fonts"', () => {
        browsePage.checkVariableFontsFilterDefault()
        browsePage.totalResultsDisplayed('34')
        browsePage.applyVariableFontsFilter()
        browsePage.totalResultsDisplayed('987')
    })


})