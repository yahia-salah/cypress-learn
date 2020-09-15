/// <reference types="Cypress"/>

describe('My Fourth Test Suite', ()=>{
    it('My First Test Case', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Working with Table
        cy.get('#product tr').each(($el,index,$list)=>{
            if($el.find('td:nth-child(2)').text().includes('Master Selenium Automation in simple Python Language')){
                cy.log("index="+index);
                expect($el.find('td:nth-child(3)').text()).to.equal('25');
            }
        })
    }) 
})