/// <reference types="Cypress"/>

describe('My 9th Test Suite', () => {
    before(() => {
        cy.fixture('test8.json').as('testData');
    })

    it('Custom Cypress Command', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('@testData').then((json) => {
            cy.get('.search-keyword').type(json.searchKeyword);
            cy.wait(2000);
            json.productName.forEach((element)=>{
                cy.addProduct(element);
            })
        })
    })
})