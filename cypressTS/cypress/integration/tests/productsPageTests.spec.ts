/// <reference path="../../support/index.d.ts" />

import { ProductsPage } from "../PageObjects/ProductsPage";

describe('Products Page Tests', () => {
    const productsPage = new ProductsPage();

    beforeEach(() => {
        cy.visit(Cypress.env('url'));
    })

    it('Search for products', () => {
        productsPage.search('ca');
        productsPage.getProducts().should('have.length', 4);
        productsPage.getProductNameOf(productsPage.getProducts().eq(1)).should('contain.text', 'Carrot');
    })

    it('Increment and decrement quantity of product', () => {
        productsPage.search('ca');
        productsPage.getProductQuantityOf(productsPage.getProducts().eq(0)).should('have.value', '1');
        productsPage.getProductQuantityIncrementOf(productsPage.getProducts().eq(0)).click();
        productsPage.getProductQuantityOf(productsPage.getProducts().eq(0)).should('have.value', '2');
        productsPage.getProductQuantityDecrementOf(productsPage.getProducts().eq(0)).click();
        productsPage.getProductQuantityOf(productsPage.getProducts().eq(0)).should('have.value', '1');
    })

    it('Add product to cart', () => {
        productsPage.search('ca');
        productsPage.getAddToCartOfProduct(productsPage.getProducts().eq(2)).click();
        let productName = productsPage.getProductNameOf(productsPage.getProducts().eq(2)).then(($el)=>{return $el});
        productName.invoke('text').then((text)=>{
            cy.log(text);
        });
        let productPrice = productsPage.getProductPriceOf(productsPage.getProducts().eq(2)).then(($el)=>{return $el});
        let price="";
        productPrice.invoke('text').then((text)=>{
            cy.log(text);
            price=text;
            productsPage.getCartPrice().should('contain.text',price);
        });
        
        productsPage.getCartItems().should('contain.text','1')
        
    })
})