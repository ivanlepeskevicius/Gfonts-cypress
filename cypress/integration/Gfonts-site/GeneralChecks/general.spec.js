import {BrowseFontsPage} from '../../../page-objects/main-page'

describe('Page versions and general checks', () => {
    const site = new BrowseFontsPage()

    beforeEach(() => {
        site.navigateToTestSite()    
    })
    
    it('Should navigate between the old and new versions of the Google fonts page', () => {
        site.navigateTo('Return to classic site')
        site.checkURL('https://fonts.google.com/')
        site.checkPageTitle('Google Fonts')
        site.navigateTo('Check out the new Google Fonts')
        site.checkURL('https://fonts.google.com/')
    })

    it('Should check the page title and protocol used', () => {
        site.checkPageTitle('Google Fonts')
        site.checkPageProtocol('https:')
        site.checkURL('https://fonts.google.com/')
        site.checkLogoVisibility()
        site.checkLearnMoreTooltip()
    })

    it('Should navigate to About page', () => {
        site.navigateTo('About')
        site.checkPageTitle('About - Google Fonts')
        site.checkURL('https://fonts.google.com/about')
        site.checkLogoVisibility()
    })

    it('Should navigate to Featured page', () => {
        site.navigateTo('Featured')
        site.checkPageTitle('Featured Collections - Google Fonts')
        site.checkURL('https://fonts.google.com/featured')
        site.checkLogoVisibility()
    })

    it('Should navigate to Articles page', () => {
        site.checkLinkToArticlesPage() //This is an external page so I'm only doing a basic check for the link
    })
})