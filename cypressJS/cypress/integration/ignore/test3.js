/// <reference types="Cypress"/>

describe('My Third Test Suite', ()=>{
    it('My First Test Case', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Alert and Confirm
        cy.get('#name').type("Yahia");
        cy.get('#alertbtn').click();
        cy.get('#name').type("Yahia");
        cy.get('#confirmbtn').click();

        cy.on('window:alert',(str)=>{ // Event Handler to Assert the Alert string
            expect(str).to.equal('Hello Yahia, share this practice page and share your knowledge');
        })

        cy.on('window:confirm',(str)=>{ // Event Handler to Assert the Confirm string
            expect(str).to.equal('Hello Yahia, Are you sure you want to confirm?');
        })

        // Cypress Workaround to Handle Browser Tabs
        cy.get('#opentab').invoke('removeAttr','target').click(); 

        cy.on('uncaught:exception',(error,runnable)=>{
            return false;
        })

        // Browser Commands
        cy.url().should('equal','https://www.rahulshettyacademy.com/');
        cy.go('back');
    }) 
})