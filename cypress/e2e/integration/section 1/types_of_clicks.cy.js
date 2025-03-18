/// <reference types="cypress" /> 

describe('Seccion 1 - Tipos de clicks', () => { 
    beforeEach(() => {
        cy.intercept({url: '**', method: 'GET'},{ log: false }).as('requests');
        cy.intercept({url: '**',method: 'POST'},{ log: false }).as('postRequests');
        cy.intercept('GET', '**/*.png', { statusCode: 204 }).as('images');
        cy.intercept('HEAD', '**', { log: false }).as('headRequests');
    });

    it("Click simple", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').click()

        Cypress.on('uncaught:exception', () => false);
    });

    it("Click forzado", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').click({force: true})
        //Para cuando no se puede hacer click en un elemento

        Cypress.on('uncaught:exception', () => false);
    });

    it.only("Click por coordenadas  (x,y)", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').click(50,5)
        //las coordenadas son referentes al elemento seleccionado
        //No se tiene que desbordar del elemento
        
        Cypress.on('uncaught:exception', () => false);
    });
});