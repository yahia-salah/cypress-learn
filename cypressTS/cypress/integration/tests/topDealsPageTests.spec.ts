/// <reference path="../../support/index.d.ts" />

import { TopDealsPage } from "../PageObjects/TopDealsPage";
import { ProductsPage } from "../PageObjects/ProductsPage";

describe('Top Deals Page Tests', () => {
    const productsPage = new ProductsPage();
    const topDealsPage = new TopDealsPage();

    beforeEach(() => {
        cy.visit(Cypress.env('url'));
        productsPage.openTopDeals();
    })

    it('Search for products', () => {
        topDealsPage.search('ea');
        topDealsPage.getVegFruitNames().should('have.length', 3).eq(0).should('contain.text', 'Wheat');
    })

    it('Page size change',()=>{
        topDealsPage.getPageSize().find('option').contains('5').should('be.selected');
        topDealsPage.getVegFruitNames().should('have.length',5);
        topDealsPage.getPageSize().select('10');
        topDealsPage.getPageSize().find('option').contains('10').should('be.selected');
        topDealsPage.getPageSize().find('option').contains('5').should('not.be.selected');
        topDealsPage.getVegFruitNames().should('have.length',10);
        topDealsPage.getPageSize().select('20');
        topDealsPage.getPageSize().find('option').contains('20').should('be.selected');
        topDealsPage.getPageSize().find('option').contains('10').should('not.be.selected');
        topDealsPage.getVegFruitNames().should('have.length',19);
    })

    it('Paging controls',()=>{      
        topDealsPage.verifyCurrentPage('1');
        topDealsPage.pressOnPageButton('2');
        topDealsPage.verifyCurrentPage('2');
        topDealsPage.getLastButton().click();
        topDealsPage.verifyCurrentPage('4');
        topDealsPage.getFirstButton().click();
        topDealsPage.verifyCurrentPage('1');
    })
})