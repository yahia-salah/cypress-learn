/// <reference types="Cypress"/>

describe('My Second Test Suite', ()=>{
    it('My First Test Case', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // checkbox
        cy.get('input[id*="checkBox"]').as('checkboxesLocator');
        cy.get('@checkboxesLocator').eq(0).click().should('be.checked').and('have.value','option1');
        cy.get('@checkboxesLocator').eq(1).check().should('be.checked');
        cy.wait(2000);
        cy.get('@checkboxesLocator').eq(0).uncheck().should('not.be.checked');
        cy.get('@checkboxesLocator').check(['option1','option3']);

        // static dropdown
        cy.get('#dropdown-class-example').select('Option2').should('have.value','option2');
        cy.wait(2000);
        cy.get('#dropdown-class-example').select('option3').should('have.value','option3');

        // dynamic dropdown
        cy.get('input#autocomplete').type('ind');
        cy.wait(2000);
        cy.get('.ui-menu-item div').each(($el,index,$list)=>{
            if($el.text()==='India'){
                $el.click();
                cy.log('Clicked element #'+index);
                return false;
            }
            else
            {
                cy.log('Skipped element #'+index);
            }
        })
        cy.get('input#autocomplete').should('have.value','India');

        // visible/invisible elements assertion
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible');

        // radio button
        cy.get('input[name="radioButton"]').check('radio2');
        cy.get('input[name="radioButton"]').eq(1).should('be.checked');
    }) 
})