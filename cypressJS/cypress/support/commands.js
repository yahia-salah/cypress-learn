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
Cypress.Commands.add("addProduct",(productName)=>{
            cy.get('.products').as('productsLocator');
            cy.get('@productsLocator').find('.product').each(($el, index, $list) => {
                if ($el.find('.product-name').text().includes(productName)) {
                    $el.find('.product-action button').click();
                    cy.wait(2000).then(() => {
                        console.log("index=" + index);
                        cy.log("index=" + index);
                    })
                }
            })
})
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
