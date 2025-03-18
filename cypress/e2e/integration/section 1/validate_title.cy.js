/// <reference types="cypress" /> 
describe('Seccion 1 - Validando el titulo pruebas', () => { 
    beforeEach(() => {
        cy.intercept({url: '**', method: 'GET'},{ log: false }).as('requests');
        cy.intercept({url: '**',method: 'POST'},{ log: false }).as('postRequests');
        cy.intercept('GET', '**/*.png', { statusCode: 204 }).as('images');
        cy.intercept('HEAD', '**', { log: false }).as('headRequests');
    });

    it("Test de Validación del titulo", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.title().should('eq', 'DEMOQA');
        cy.log("Test exitoso");

        Cypress.on('uncaught:exception', () => false);
    });
});