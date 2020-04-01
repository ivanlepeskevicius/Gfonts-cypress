// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add("validateLinkToExternalSite", (locator, url) => {
    cy.contains(locator)
            .should('have.prop', 'href', url)
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
})