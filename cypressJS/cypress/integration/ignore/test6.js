/// <reference types="Cypress"/>

describe('My Sixth Test Suite', ()=>{
    it('My First Test Case', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Get Value of Attribute
        cy.get('#opentab').then(($el)=>{
            cy.log("href="+$el.prop('href'));
        })
    }) 
})