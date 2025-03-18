/// <reference types="cypress" /> 

describe('Seccion 1 - Introduccion a los asserts', () => { 
    beforeEach(() => {
        cy.intercept({url: '**', method: 'GET'},{ log: false }).as('requests');
        cy.intercept({url: '**',method: 'POST'},{ log: false }).as('postRequests');
        cy.intercept('GET', '**/*.png', { statusCode: 204 }).as('images');
        cy.intercept('HEAD', '**', { log: false }).as('headRequests');
    });

    it("Test de visualización y habilitacion de un campo", () => {
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.get('#firstName').should('be.visible').type("Abigail Naomi")
        cy.get('#lastName').should("be.visible").type("Pereyra")
        cy.get('#userEmail').should("be.visible").should("be.enabled").type("email@mail.com")

        Cypress.on('uncaught:exception', () => false);
    });
});