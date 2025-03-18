///<reference types="cypress" /> 
require('cypress-xpath'); //Para usar xPath pero esta deprecado
describe('Section 1 - Reto número Dos ', () => { 
    beforeEach(() => {
        cy.intercept({url: '**', method: 'GET'},{ log: false }).as('requests');
        cy.intercept({url: '**',method: 'POST'},{ log: false }).as('postRequests');
        cy.intercept('GET', '**/*.png', { statusCode: 204 }).as('images');
        cy.intercept('HEAD', '**', { log: false }).as('headRequests');
    });

    it("Probando aplicación", () => {
        cy.visit("https://computer-database.gatling.io/computers")
        cy.title().should('eq', 'Computers database')
        cy.wait(1000)

        cy.xpath("//*[@id='searchbox']").type('ACE')
        cy.get("#searchsubmit").should("be.visible").click()
        cy.wait(1000)
        cy.get('a').contains('ACE').click() // para seleccionar uno de los elementos de la tabla
        
        //Agregar un nuevo elemento
        cy.get("#add").should("be.visible").click()
        cy.wait(1000)
        cy.get("#name").type("Prueba Abi")
        cy.get("#introduced").type("1998-10-01")
        cy.get("#discontinued").type("2080-12-31")
        cy.get("#company").select("RCA").should("have.value", "3")
        cy.get("input[type='submit']").click()
    
        //Buscar el elemento creado
        cy.xpath("//*[@id='searchbox']").type("Prueba Abi")
        cy.get("#searchsubmit").should("be.visible").click()
        cy.wait(1000)
    })
}) 
