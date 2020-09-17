export class TopDealsPage {
    constructor() {
    }

    // Getters
    getSearchField() {
        return cy.get('#search-field');
    }
    getPageSize() {
        return cy.get('#page-menu').eq(0);
    }
    getFirstButton() {
        return cy.get('ul li a[aria-label="First"]');
    }
    getPreviousButton() {
        return cy.get('ul li a[aria-label="Previous"]');
    }
    getNextButton() {
        return cy.get('ul li a[aria-label="Next"]');
    }
    getLastButton() {
        return cy.get('ul li a[aria-label="Last"]');
    }
    getPagesCount() {
        let count = 0;
        cy.get('ul li a').each(($el, index, $list) => {
            if ($el.find('span:nth-child(1)').text().length >= 1) {
                count++;
            }
        })
        return count;
    }
    verifyCurrentPage(currentPage: string) {
        cy.get('ul li').each(($el, index, $list) => {
            let value = $el.prop('class');
            cy.log(value);
            if (value === "active") {
                cy.get('ul li').eq(index).should('contain.text', currentPage);
                return false;
            }
        })
    }
    getVegFruitNames() {
        return cy.get('table tr td:nth-child(1)');
    }
    getPrices() {
        return cy.get('table tr td:nth-child(2)');
    }
    getDiscountPrices() {
        return cy.get('table tr td:nth-child(3)');
    }

    // Operations on Page
    search(searchKeyword: string) {
        this.getSearchField().type(searchKeyword).then(() => {
            cy.wait(2000);
        });
    }
    pressOnPageButton(pageNumber: string) {
        cy.get('ul li a').each(($el, index, $list) => {
            let text = $el.find('span:nth-child(1)').text();
            if (text.length >= 1 && text === pageNumber) {
                cy.log('clicking item index' + index);
                cy.get('ul li a').eq(index).click();
                return false;
            }
        })
    }
}