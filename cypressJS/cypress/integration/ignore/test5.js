/// <reference types="Cypress"/>

describe('My Fifth Test Suite', ()=>{
    it('My First Test Case', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Mouse Hover Workaround
        cy.get('.mouse-hover-content').invoke('show');
        cy.get('a').contains('Top').click();
        cy.url().should('include','#top');
    }) 
})