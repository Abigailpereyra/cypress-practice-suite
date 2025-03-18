/// <reference types="cypress" /> 
describe('Seccion 1 - Ejemplo Type pageUP y PageDown ', () => { 
    beforeEach(() => {
        cy.intercept({url: '**', method: 'GET'},{ log: false }).as('requests');
        cy.intercept({url: '**',method: 'POST'},{ log: false }).as('postRequests');
        cy.intercept('GET', '**/*.png', { statusCode: 204 }).as('images');
        cy.intercept('HEAD', '**', { log: false }).as('headRequests');
    });

    it("Type - PageUp ", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.title().should('eq', 'DEMOQA');

        cy.get("#userName").type('{pageUp}');

        Cypress.on('uncaught:exception', () => false);
    });

    it("Type - PageDown ", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.title().should('eq', 'DEMOQA');

        cy.get("#userName").type('{pageDown}');

        Cypress.on('uncaught:exception', () => false);
    });

    // it.only("Type - PageUp ", () => { Solo se va a ejecutar los tests que tengan la palabra only
});