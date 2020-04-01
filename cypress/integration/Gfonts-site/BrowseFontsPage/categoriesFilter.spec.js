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

    it('Should be able to uncheck all categories and reset', () => {
        browsePage.unCheckAllCateogories()
        browsePage.showsCatalogError()
        browsePage.clearResultError()
        browsePage.checkCategoriesByDefault()
    })

    it('Should be able to filter by the first category (Serif)', () => {
        browsePage.unCheckAllCateogories()
        browsePage.selectCategory('Serif')
        browsePage.checkCategoryFilterText('Serif')
        browsePage.totalResultsDisplayed('203')
        browsePage.checkFirstResult('Roboto Slab')
    })

    it('Should be able to filter by the second category (Sans Serif)', () => {
        browsePage.unCheckAllCateogories()
        browsePage.selectCategory('Sans Serif')
        browsePage.checkCategoryFilterText('Sans Serif')
        browsePage.totalResultsDisplayed('301')
        browsePage.checkFirstResult('Roboto')
    })

    it('Should be able to filter by the third category (Display)', () => {
        browsePage.unCheckAllCateogories()
        browsePage.selectCategory('Display')
        browsePage.checkCategoryFilterText('Display')
        browsePage.totalResultsDisplayed('316')
        browsePage.checkFirstResult('Baloo Thambi 2')
    })

    it('Should be able to filter by the fourth category (Handwriting)', () => {
        browsePage.unCheckAllCateogories()
        browsePage.selectCategory('Handwriting')
        browsePage.checkCategoryFilterText('Handwriting')
        browsePage.totalResultsDisplayed('146')
        browsePage.checkFirstResult('Comic Neue')
    })

    it('Should be able to filter by the fifth category (Monospace)', () => {
        browsePage.unCheckAllCateogories()
        browsePage.selectCategory('Monospace')
        browsePage.checkCategoryFilterText('Monospace')
        browsePage.totalResultsDisplayed('21')
        browsePage.checkFirstResult('Roboto Mono')
    })

    it('Should be able to filter by multiple selection', () => {
        browsePage.unCheckAllCateogories()
        browsePage.selectCategory('Serif')
        browsePage.checkCategoryFilterText('Serif')
        browsePage.selectCategory('Sans Serif')
        browsePage.checkCategoryFilterText('Serif + 1')
        browsePage.selectCategory('Display')
        browsePage.checkCategoryFilterText('Serif + 2')
        browsePage.selectCategory('Handwriting')
        browsePage.checkCategoryFilterText('Serif + 3')
        browsePage.selectCategory('Monospace')
        browsePage.checkCategoryFilterText('Categories')
        browsePage.selectCategory('Serif')
        browsePage.checkCategoryFilterText('Sans Serif + 3')
    })


})