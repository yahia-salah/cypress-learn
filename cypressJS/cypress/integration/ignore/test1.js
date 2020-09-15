/// <reference types="Cypress"/>

describe('My First Test Suite', ()=>{
    it('My First Test Case', ()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        cy.get('.products .product').should('have.length',4);
        cy.get('.products').as('productsLocator');
        cy.get('@productsLocator').find(':nth-child(2)').find('.product-name').should('contain.text','Carrot');
        cy.get('@productsLocator').find('.product').eq(1).find('.product-action button').click();
        cy.wait(2000);
        cy.get('@productsLocator').find('.product').eq(1).find('.product-action button').should('contain.text','ADDED');
        cy.get('.cart-info td:nth-child(3)').eq(0).should('contain.text','1'); // Items Count in Cart
        cy.get('.cart-info td:nth-child(3)').eq(1).should('contain.text','56'); // Price Sum in Cart

        cy.get('@productsLocator').find('.product').each(($el,index,$list)=>{
            if($el.find('.product-name').text().includes('Capsicum')){
                $el.find('.product-action button').click();
                cy.wait(2000).then(()=>{
                    console.log("index="+index);
                    cy.log("index="+index);
                })
            }
        })
        cy.get('.cart-info td:nth-child(3)').eq(0).should('contain.text','2'); // Items Count in Cart
        cy.get('.cart-info td:nth-child(3)').eq(1).should('contain.text','116'); // Price Sum in Cart

        // Verify items inside Cart
        cy.get('a.cart-icon').click();
        cy.wait(2000);
        cy.get('.cart-preview .cart-items').find('.cart-item').should('have.length',2);
        cy.get('.cart-preview .cart-items').find('.cart-item').find('.product-name').eq(0).should('contain.text','Carrot');
        cy.get('.cart-preview .cart-items').find('.cart-item').find('.product-name').eq(1).should('contain.text','Capsicum');
        cy.get('button').contains('PROCEED TO CHECKOUT').click();

        // Verify Checkout Page
        cy.get('.products .cartTable').as('cartTable');
        cy.get('@cartTable').find('.product-name').should('have.length',2);
        cy.get('@cartTable').find('.product-name').eq(0).should('contain.text','Carrot');
        cy.get('@cartTable').find('.product-name').eq(1).should('contain.text','Capsicum');
        cy.get('.products').find('.totAmt').should('contain.text',116);
        cy.get('.products').contains('Place Order').click();
    }) 
})