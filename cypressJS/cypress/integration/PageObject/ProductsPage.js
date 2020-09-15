/// <reference types="Cypress"/>

class ProductsPage {
    constructor() {
    }

    // Getters
    getSearchKeyword(){
        return cy.get('.search-keyword');
    }
    getCartItems(){
        return cy.get('.cart-info td:nth-child(3)').eq(0);
    }
    getCartPrice(){
        return cy.get('.cart-info td:nth-child(3)').eq(1);
    }
    getCartIcon(){
        return cy.get('a.cart-icon');
    }
    getProducts() {
        return cy.get('.products').find('.product');
    }
    getProductNameOf(product) {
        return product.find('.product-name');
    }
    getProductImageOf(product) {
        return product.find('.product-image img');
    }
    getProductPriceOf(product) {
        return product.find('.product-price');
    }
    getProductQuantityOf(product) {
        return product.find('input.quantity');
    }
    getProductQuantityIncrementOf(product) {
        return product.find('a.Increment');
    }
    getProductQuantityDecrementOf(product) {
        return product.find('a.decrement');
    }
    getAddToCartOfProduct(product) {
        return product.find('.product-action button');
    }

    // Operations on Page
    search(searchKeyword) {
        this.getSearchKeyword().type(searchKeyword).then(()=>{
            cy.wait(2000);
        });
    }
    openCartPreview()
    {
        this.getCartIcon().click().then(()=>{
            cy.wait(2000);
        })
    }

}

export default ProductsPage;