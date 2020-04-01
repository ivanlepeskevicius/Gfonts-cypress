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
        cy.get('.lockup-brand').first()
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
        cy.validateLinkToExternalSite(
            'Articles',
            'https://design.google/library/google-fonts/?utm_source=Google&utm_medium=Fonts&utm_campaign=Article%20Tab'
            )
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
        cy.visit('/?category=Serif') //If I try to go to '/?category=' it throws undefined and goes to '/'
        cy.get('[aria-label="Open category filter interactions menu"]').first().click()
        //Manually deselect the only category
        cy.get('[aria-label="Serif"]').click()
        cy.get('.close-icon-model').last().click()
    }

    //End Categories' filter

    //Variable fonts
    checkLearnMoreTooltip() {
        cy.contains('Google Fonts now supports variable fonts.').should('be.visible')
        cy.validateLinkToExternalSite(
            'Learn more',
            'https://developers.google.com/web/fundamentals/design-and-ux/typography/variable-fonts'
            )
        cy.get('[ng-click="vfFilterCallout.closeCallout()"]').click()
    }

    checkVariableFontsFilterDefault() {
        cy.contains('Show only variable fonts').should('be.visible')
        cy.get('[aria-label="Is variable fonts filter active"]')
            .should('be.visible')
            .and('not.be.checked')
        cy.get('[md-labeled-by-tooltip="md-tooltip-2"]').click({ force: true })
        cy.contains('You can use these fonts to create custom styles').should('be.visible')
    }

    applyVariableFontsFilter() {
        cy.get('[aria-label="Is variable fonts filter active"]').click()
    }
}