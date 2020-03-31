import {BrowseFontsPage} from '../../../page-objects/main-page'

describe('Page versions and general checks', () => {
    const site = new BrowseFontsPage()

    beforeEach(() => {
        site.navigateToTestSite()    
    })
    
    it('Should navigate between the old and new versions of the Google fonts page', () => {
        site.validateOldGFontsLink()
        site.navigateToOtherVersion() //navigates to the old version
        site.validateNewGFontsLink()
        site.navigateToOtherVersion() //navigates to the new version again
        site.validateOldGFontsLink()
    })

    it('Should check the page title and protocol used', () => {
        site.checkPageTitle('Google Fonts')
        site.checkPageProtocol('https:')
    })

    it('Should navigate to About page', () => {
        site.navigateToAboutPage()
        site.checkPageTitle('About - Google Fonts')
    })

    it('Should navigate to Featured page', () => {
        site.navigateToFeaturedPage()
        site.checkPageTitle('Featured Collections - Google Fonts')
    })

    it('Should navigate to Articles page', () => {
        site.checkLinkToArticlesPage() //This is an external page so I'm only doing a basic check for the link
    })
})