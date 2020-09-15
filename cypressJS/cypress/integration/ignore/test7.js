/// <reference types="Cypress"/>
/// <reference types="cypress-iframe"/>
import 'cypress-iframe'

describe('My Seventh Test Suite', ()=>{
    it('Working with iframe', ()=>{
        cy.visit('https://www.dyn-web.com/tutorials/iframes/basics/demo.php')

        cy.frameLoaded('#ifrm');
        cy.iframe().find('h1').should('contain.text','Iframe Demo');

    }) 
})