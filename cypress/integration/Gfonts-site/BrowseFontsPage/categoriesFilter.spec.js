import {BrowseFontsPage} from '../../../page-objects/main-page'

describe('Browse Fonts - Filter by categories functionality', () => {
    const browsePage = new BrowseFontsPage()

    beforeEach(() => {
        browsePage.navigateToTestSite()    
    })
    
    it('Should display all categories selected by default', () => {
        browsePage.checkCategoriesByDefault()
        browsePage.checkFirstResult('Roboto')
    })

    it('Should be able to uncheck all categories', () => {
        browsePage.checkOnly(5)
        browsePage.showsCatalogError()
        browsePage.checkCategoryFilterText('No categories selected')
    })

    it('Should clear the selected filters after an error', () => {
        browsePage.checkOnly(5)
        browsePage.showsCatalogError()
        browsePage.clearResultError()
        browsePage.checkCategoriesByDefault()
    })

    it('Should be able to filter by the first category (Serif)', () => {
        browsePage.checkOnly(0)
        browsePage.checkCategoryFilterText('Serif')
        browsePage.totalResultsDisplayed('203')
        browsePage.checkFirstResult('Roboto Slab')
    })

    it('Should be able to filter by the second category (Sans Serif)', () => {
        browsePage.checkOnly(1)
        browsePage.checkCategoryFilterText('Sans Serif')
        browsePage.totalResultsDisplayed('301')
        browsePage.checkFirstResult('Roboto')
    })

    it('Should be able to filter by the third category (Display)', () => {
        browsePage.checkOnly(2)
        browsePage.checkCategoryFilterText('Display')
        browsePage.totalResultsDisplayed('316')
        browsePage.checkFirstResult('Baloo Thambi 2')
    })

    it('Should be able to filter by the fourth category (Handwriting)', () => {
        browsePage.checkOnly(3)
        browsePage.checkCategoryFilterText('Handwriting')
        browsePage.totalResultsDisplayed('146')
        browsePage.checkFirstResult('Comic Neue')
    })

    it('Should be able to filter by the fifth category (Monospace)', () => {
        browsePage.checkOnly(4)
        browsePage.checkCategoryFilterText('Monospace')
        browsePage.totalResultsDisplayed('21')
        browsePage.checkFirstResult('Roboto Mono')
    })

    it('Should be able to filter by multiple selection', () => {
        browsePage.checkOnly(0)
        browsePage.checkCategoryFilterText('Serif')
        browsePage.selectCategoty(1)
        browsePage.checkCategoryFilterText('Serif + 1')
        browsePage.selectCategoty(2)
        browsePage.checkCategoryFilterText('Serif + 2')
        browsePage.selectCategoty(3)
        browsePage.checkCategoryFilterText('Serif + 3')
        browsePage.selectCategoty(4)
        browsePage.checkCategoryFilterText('Categories')
        browsePage.selectCategoty(0)
        browsePage.checkCategoryFilterText('Sans Serif + 3')
    })


})