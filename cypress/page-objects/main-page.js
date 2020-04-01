export class BrowseFontsPage {
    //Navigation

    navigateToTestSite() {
        cy.visit('/')
    }

    checkPageTitle(title) {
        cy.title().should('eq', title)
    }

    checkPageProtocol(protocol) {
        cy.location('protocol').should('eq', protocol)
    }

    checkURL(urlAdd) {
        cy.url().should('eq', urlAdd)
    }

    checkLogoVisibility() {
        cy.get('.gf-header-content > .lockup > .lockup-brand')
            .should('contain.text', 'Fonts')
            .and('be.visible')
    }

    navigateTo(linkName) {
        cy.contains(linkName).click()
    }

    navigateToArticlesPage() {
        cy.visit('https://design.google/library/google-fonts/?utm_source=Google&utm_medium=Fonts&utm_campaign=Article%20Tab')
    }

    checkLinkToArticlesPage() {
        cy.get(':nth-child(4) > .header-nav-link')
            .should('have.prop', 'href', 'https://design.google/library/google-fonts/?utm_source=Google&utm_medium=Fonts&utm_campaign=Article%20Tab')
            .then(function ($a) {
                const href = $a.prop('href')

                // request the contents of the Article page
                cy.request(href)

                    // drill into the response body
                    .its('body')

                    // Because we don't control this site - we don't feel
                    // comfortable making any kind of assertions
                    // on the response body other than google having a closing <html> tag.
                    .should('include', '</html>')
            })
    }

    //End navigation group

    //Search bar
    searchFont(searchTerm) {
        cy.get('[type=search]').type(searchTerm + '{enter}')
    }

    selectExampleType(option) {
        cy.get('.toolbar-preview-text-type-menu').first().click()
        cy.contains(option).click()
    }

    typeCustomExample(txtExample) {
        cy.get('#toolbar-text-modifier-field').type(txtExample)
    }

    validateCustomExample(txtExample) {
        cy.get('#toolbar-text-modifier-field').type(txtExample)
        cy.get('.font-preview-text').should('have.text', txtExample)
    }

    //size selector by listed values

    //size selector by draging 

    checkDefaultResetBtnStatus() {
        cy.get('[aria-label="Reset"]')
            .should('be.visible')
            .and('be.disabled')
    }

    resetFilters() {
        cy.get('[aria-label="Reset"]').click()
    }
    //End search bar

    //Results
    totalResultsDisplayed(total) {
        cy.get('span.grid-list-results-count-value').text().should('equal', total)
    }

    noResultsInOSCatalogTxt() {
        cy.contains('No matches in the open source catalog.').should('be.visible')
    }

    checkFirstResult(fontName) {
        cy.contains(fontName).should('exist').and('be.visible')
    }

    checkAuthorName(authorName) {
        cy.contains(authorName).should('exist').and('be.visible')
    }

    showsCatalogError() {
        cy.contains("Can’t find any fonts").should('be.visible')
        cy.contains('Clear your filters and try again.').should('be.visible')
    }

    clearResultError() {
        cy.contains('Clear your filters and try again.').click()
    }
    //End results' group

    //Categories' filter
    checkCategoriesByDefault() {
        cy.get('[aria-label="Open category filter interactions menu"]').first().click()

        //Checks the menu's header
        cy.get('.toolbar-menu-header').last()
            .should('contain.text', 'Categories')
        //Checks the first option
        cy.contains('Serif')
        cy.get('[aria-label="Serif"]').should('have.class', 'md-checked')
        //Checks the second option
        cy.contains('Sans Serif')
        cy.get('[aria-label="Sans Serif"]').should('have.class', 'md-checked')
        //Checks the third option
        cy.contains('Display')
        cy.get('[aria-label="Display"]').should('have.class', 'md-checked')
        //Checks the fourth option
        cy.contains('Handwriting')
        cy.get('[aria-label="Handwriting"]').should('have.class', 'md-checked')
        //Checks the fifth option
        cy.contains('Monospace')
        cy.get('[aria-label="Monospace"]').should('have.class', 'md-checked')

        cy.get('.close-icon-model').last().click()
    }

    checkCategoryFilterText(categoryTxt) {
        cy.contains(categoryTxt).should('be.visible')
    }

    selectCategory(category) {
        cy.get('[aria-label="Open category filter interactions menu"]').first().click()
        //Selects the desired category 
        cy.get(`[aria-label="${category}"]`).click()
        //closes the cateogries' selector
        cy.get('.close-icon-model').last().click()
    }

    unCheckAllCateogories() {
        cy.get('[aria-label="Open category filter interactions menu"]').first().click()
        //Deselect all categories
        cy.get('[aria-label="Serif"]').click()
        cy.get('[aria-label="Sans Serif"]').click()
        cy.get('[aria-label="Display"]').click()
        cy.get('[aria-label="Handwriting"]').click()
        cy.get('[aria-label="Monospace"]').click()
        //closes the cateogries' selector
        cy.get('.close-icon-model').last().click()
    }

    //End Categories filter

}