/// <reference types="cypress" /> 
require('cypress-plugin-tab')
describe('Seccion 1 - Funcion tab', () => { 
    beforeEach(() => {
        cy.intercept({url: '**', method: 'GET'},{ log: false }).as('requests');
        cy.intercept({url: '**',method: 'POST'},{ log: false }).as('postRequests');
        cy.intercept('GET', '**/*.png', { statusCode: 204 }).as('images');
        cy.intercept('HEAD', '**', { log: false }).as('headRequests');
    });

    it("Test en form para tabular", () => {
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.get('#firstName').type("Abigail Naomi").tab().
        get('#lastName').type("Pereyra").tab().
        get('#userEmail').type("email@mail.com").tab()

        Cypress.on('uncaught:exception', () => false);
    });
});