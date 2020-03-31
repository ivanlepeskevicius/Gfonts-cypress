import {BrowseFontsPage} from '../../../page-objects/main-page'

describe('General checks for the external site in Google Design', () => {
    const site = new BrowseFontsPage()

    beforeEach(() => {
        site.navigateToArticlesPage()    
    })

    it('Should navigate to Articles page', () => {
        site.checkPageTitle('Featured Collection: Type & Typography - Library - Google Design')
        site.checkPageProtocol('https:')
        cy.get('.header-logo > a').should('have.text','Google Design')
    })

})