import {BrowseFontsPage} from '../../../page-objects/main-page'

describe('Page versions checks', () => {
    const mainPage = new BrowseFontsPage()

    beforeEach(() => {
        mainPage.navigateToTestSite()    
    })
    
    it('Should navigate to the Google fonts page older version', () => {
        mainPage.validateOldGFontsLink()
        mainPage.returnToClassicSite()
        mainPage.validateNewGFontsLink()
    })

    it('Should navigate to the newer page version', () => {
        mainPage.returnToClassicSite()
        mainPage.navigateToNewSite()
        mainPage.validateOldGFontsLink()
    })

})