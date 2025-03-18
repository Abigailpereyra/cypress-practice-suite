///<reference types="cypress"/> 

describe(" ", () => {
   beforeEach(() => {
        cy.intercept({url: '**',method: 'GET'},{ log: false }).as('requests');
        cy.intercept({url: '**',method: 'POST'},{ log: false }).as('postRequests');
        cy.intercept('GET', '**/*.png', { statusCode: 204 }).as('images');
        cy.intercept('HEAD', '**', { log: false }).as('headRequests');
    }); 
    it("Funciones para Type ", () => {
        cy.visit("https://www.google.com/")
        cy.title().should('eq', "Google")
        cy.wait(1500)

        cy.get("#APjFqb").type("Cypress.io{enter}")
        cy.wait(11500) //Se agrega por no poder encontrar el elemento a causa de un captcha
        cy.get("#rso > div.hlcw0c > div > div > div > div > div > div > div > div > div.yuRUbf > div > span > a > h3").click()

        Cypress.on('uncaught:exception', () => false);
    })
}) 