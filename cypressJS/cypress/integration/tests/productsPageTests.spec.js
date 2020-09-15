/// <reference types="Cypress"/>
import ProductsPage from '../PageObject/ProductsPage'

describe('Products Page Tests', () => {
    const productsPage = new ProductsPage();
    var url;

    before(() => {
        cy.fixture('data/urls').then((data) => {
            url = data.QA;
        })
    })

    it('Search for products', () => {
        cy.visit(url);
        productsPage.search('ca');
        productsPage.getProducts().should('have.length', 4);
        productsPage.getProductNameOf(productsPage.getProducts().eq(1)).should('contain.text', 'Carrot');
    })

    it('Increment and decrement quanityt of product', () => {
        cy.visit(url);
        productsPage.search('ca');
        productsPage.getProductQuantityOf(productsPage.getProducts().eq(0)).should('have.value', '1');
        productsPage.getProductQuantityIncrementOf(productsPage.getProducts().eq(0)).click();
        productsPage.getProductQuantityOf(productsPage.getProducts().eq(0)).should('have.value', '2');
        productsPage.getProductQuantityDecrementOf(productsPage.getProducts().eq(0)).click();
        productsPage.getProductQuantityOf(productsPage.getProducts().eq(0)).should('have.value', '1');
    })

    it('Add product to cart', () => {
        cy.visit(url);
        productsPage.search('ca');
        productsPage.getProducts().eq(2).as('product');
        productsPage.getProductNameOf(cy.get('@product')).as('productName');
        productsPage.getProductPriceOf(cy.get('@product')).as('productPrice');
        productsPage.getAddToCartOfProduct(cy.get('@product')).click();
        productsPage.getCartItems().should('contain.text','1');
        productsPage.getCartPrice().should('contain.text','60');
    })
})