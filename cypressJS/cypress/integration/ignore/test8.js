/// <reference types="Cypress"/>

describe('My 8th Test Suite', () => {
    before(() => {
        cy.fixture('test8.json').as('testData');
    })

    it('Parameterizing Test Data', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('@testData').then((json) => {
            cy.get('.search-keyword').type(json.searchKeyword);
            cy.wait(2000);
            cy.get('.products').as('productsLocator');
            cy.get('@productsLocator').find('.product').each(($el, index, $list) => {
                if ($el.find('.product-name').text().includes(json.productName[0])) {
                    $el.find('.product-action button').click();
                    cy.wait(2000).then(() => {
                        console.log("index=" + index);
                        cy.log("index=" + index);
                    })
                }
            })
        })
    })
})