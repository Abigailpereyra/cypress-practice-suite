/// <reference types="cypress" /> 
require('cypress-plugin-tab')

describe('Section 1 - Reto número uno ', () => { 
    beforeEach(() => {
        cy.intercept({url: '**', method: 'GET'},{ log: false }).as('requests');
        cy.intercept({url: '**',method: 'POST'},{ log: false }).as('postRequests');
        cy.intercept('GET', '**/*.png', { statusCode: 204 }).as('images');
        cy.intercept('HEAD', '**', { log: false }).as('headRequests');
    });

    it("Test para agregar un registro", () => {
        
        //Verificar titulo
        cy.visit("https://demoqa.com/webtables")
        cy.title().should('eq', 'DEMOQA')
        cy.wait(1500)


        //Busqueda de un registro existente
        cy.get("#searchBox").should('be.visible').type("Cierra")
        cy.wait(1500)
        cy.get("#searchBox").should('be.visible').clear()

        //Agregar un nuevo registro
        cy.get("#addNewRecordButton").should('be.visible').click()
        cy.wait(1500)
        cy.get('#firstName').should('be.visible').type("Abigail Naomi").tab().
        type("Pereyra").tab().
        type("email@mail.com").tab().type("26").tab().type("1000").tab().type("Sistemas")
        cy.get("#submit").should('be.visible').click()

        //Validar que el registro se haya agregado
        cy.get("#searchBox").should('be.visible').type("Pereyra")
        cy.wait(1500)
        cy.get("#searchBox").should('be.visible').clear()

         //Editar el registro
         cy.get('#edit-record-4').should('be.visible').click()
         cy.wait(1500)
         cy.get('#age').should('be.visible').clear().type("24")
         cy.get('#salary').should('be.visible').clear().type("5000000")
 
         cy.get("#submit").should('be.visible').click()
 
         //Validar que el registro se haya editado
         cy.get("#searchBox").should('be.visible').type("Pereyra")
         cy.wait(1500)
         cy.get("#searchBox").should('be.visible').clear()

         //Eliminar el registro
         cy.wait(1500)
         cy.get('#delete-record-4').should('be.visible').click()

        Cypress.on('uncaught:exception', () => false);
    });

});