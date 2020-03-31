export class BrowseFontsPage {
    //Navigation
    navigateToOldSite() {
        cy.visit('/')
    }

    navigateToTestSite() {
        cy.visit('/')
    }

    navigateToNewSite() {
        cy.get(':nth-child(1) > .header-nav-link').click()
    }

    returnToClassicSite() {
        cy.get(':nth-child(1) > .header-nav-link').click()
    }
  
    validateNewGFontsLink() {
        cy.get(':nth-child(1) > .header-nav-link').should('have.text', 'Check out the new Google Fonts')
    }

    validateOldGFontsLink() {
        cy.get(':nth-child(1) > .header-nav-link').should('have.text','Return to classic site')
    }
    
    navigateToBrowseFontsPage() {
        cy.get(':nth-child(2) > .header-nav-link').click()
    }
    
    navigateToFeaturedPage() {
        cy.get(':nth-child(3) > .header-nav-link').click()
    }

    navigateToArticlesPage() {
        cy.get(':nth-child(4) > .header-nav-link').click()
    }

    navigateToAboutPage() {
        cy.get(':nth-child(5) > .header-nav-link').click()
    }
    
    //End navigation group

    //Search bar
    searchFont(fontName) {
        cy.get('#input_5').type(fontName + '{enter}')
    }

    selectExampleType(option) {
        cy.get('.md-menu-backdrop')
        cy.get(`#menu_container_5 > .global-toolbar-menu-content > :nth-child(${option}) > .md-button`).click()
    }

    typeCustomExample(txtExample) {
        cy.get('#toolbar-text-modifier-field').type(txtExample)
    }

    validateCustomExample(txtExample) {
        cy.get('#toolbar-text-modifier-field').type(txtExample)
        cy.get('.font-preview-text').should('have.text',txtExample)
    }
    //End search bar

    //Results
    totalResultsDisplayed(total) {
        cy.get('span.grid-list-results-count-value').text().should('equal',total)
    }

    noResultsInOSCatalogTxt() {
        cy.get('.catalog-result-wrap > p').should('contain.text','No matches in the open source catalog.')
    }

    checkFirstResult(fontName) {
        cy.get('.fonts-module-title').should('exist')
        cy.get(':nth-child(1) > grid-item-template .fonts-module-title').text().should('equal', fontName)
    }

    checkAuthorName(authorName){
        cy.get('.fonts-module-subtitle').should('contain.text',authorName)
    }

    showsCatalogError() {
        cy.get('.catalog-error').should('exist')
            .and('contain.text',"Can’t find any fonts")
        cy.get('[ng-if="error.isSearchResultEmpty"] > .md-button').should('exist')
    }

    clearResultError() {
        cy.get('[ng-if="error.isSearchResultEmpty"] > .md-button').click()
    }
    //End results' group

    //Categories' filter
    checkCategoriesByDefault() {
        cy.get('gf-toolbar-category-filter > .md-menu > .toolbar-filter-item-button').should('contain.text','Categories')
        cy.get('gf-toolbar-category-filter > .md-menu > .toolbar-filter-item-button').click()
        //Checks the menu's header
        cy.get('#menu_container_11 > .toolbar-filter-menu > .toolbar-menu-header > h3').should('contain.text','Categories')
        //Checks the first option
        cy.get(':nth-child(2) > .gf-checkbox > .md-label').should('contain.text','Serif')
        cy.get(':nth-child(2) > .gf-checkbox').should('have.class','md-checked')
        //Checks the second option
        cy.get(':nth-child(3) > .gf-checkbox > .md-label').should('contain.text','Sans Serif')
        cy.get(':nth-child(3) > .gf-checkbox').should('have.class','md-checked')
        //Checks the third option
        cy.get(':nth-child(4) > .gf-checkbox > .md-label').should('contain.text','Display')
        cy.get(':nth-child(4) > .gf-checkbox').should('have.class','md-checked')
        //Checks the fourth option
        cy.get(':nth-child(5) > .gf-checkbox > .md-label').should('contain.text','Handwriting')
        cy.get(':nth-child(5) > .gf-checkbox').should('have.class','md-checked')
        //Checks the fifth option
        cy.get(':nth-child(6) > .gf-checkbox > .md-label').should('contain.text','Monospace')
        cy.get(':nth-child(6) > .gf-checkbox').should('have.class','md-checked')

        cy.get('#menu_container_11 > .toolbar-filter-menu > .toolbar-menu-header > .close-icon-model').click()
    }

    checkCategoryFilterText(categoryTxt) {
        cy.get('gf-toolbar-category-filter > .md-menu > .toolbar-filter-item-button').should('contain.text', categoryTxt)
    }

    checkOnly(category){
        cy.get('gf-toolbar-category-filter > .md-menu > .toolbar-filter-item-button').click()
        switch (category) {
            case 0:
                cy.get(':nth-child(3) > .gf-checkbox').click()
                cy.get(':nth-child(4) > .gf-checkbox').click()
                cy.get(':nth-child(5) > .gf-checkbox').click()
                cy.get(':nth-child(6) > .gf-checkbox').click()
              break;
            case 1:
                cy.get(':nth-child(2) > .gf-checkbox').click()
                cy.get(':nth-child(4) > .gf-checkbox').click()
                cy.get(':nth-child(5) > .gf-checkbox').click()
                cy.get(':nth-child(6) > .gf-checkbox').click()
              break;
            case 2:
                cy.get(':nth-child(2) > .gf-checkbox').click()
                cy.get(':nth-child(3) > .gf-checkbox').click()
                cy.get(':nth-child(5) > .gf-checkbox').click()
                cy.get(':nth-child(6) > .gf-checkbox').click()
              break;
            case 3:
                cy.get(':nth-child(2) > .gf-checkbox').click()
                cy.get(':nth-child(3) > .gf-checkbox').click()
                cy.get(':nth-child(4) > .gf-checkbox').click()
                cy.get(':nth-child(6) > .gf-checkbox').click()
              break;
            case 4:
                cy.get(':nth-child(2) > .gf-checkbox').click()
                cy.get(':nth-child(3) > .gf-checkbox').click()
                cy.get(':nth-child(4) > .gf-checkbox').click()
                cy.get(':nth-child(5) > .gf-checkbox').click()
              break;
            case 5: //no categories
                cy.get(':nth-child(2) > .gf-checkbox').click()
                cy.get(':nth-child(3) > .gf-checkbox').click()
                cy.get(':nth-child(4) > .gf-checkbox').click()
                cy.get(':nth-child(5) > .gf-checkbox').click()
                cy.get(':nth-child(6) > .gf-checkbox').click()
            break;
        }
        cy.get('#menu_container_11 > .toolbar-filter-menu > .toolbar-menu-header > .close-icon-model').click()
    }

    selectCategoty(category){
        cy.get('gf-toolbar-category-filter > .md-menu > .toolbar-filter-item-button').click()
        switch (category) {
            case 0:
                cy.get(':nth-child(2) > .gf-checkbox').click()
              break;
            case 1:
                cy.get(':nth-child(3) > .gf-checkbox').click()
              break;
            case 2:
                cy.get(':nth-child(4) > .gf-checkbox').click()
              break;
            case 3:
                cy.get(':nth-child(5) > .gf-checkbox').click()
              break;
            case 4:
                cy.get(':nth-child(6) > .gf-checkbox').click()
              break;
        }
        cy.get('#menu_container_11 > .toolbar-filter-menu > .toolbar-menu-header > .close-icon-model').click()
    }

    //End Categories filter

}