///<reference types="cypress" /> 
require('cypress-xpath');
describe("Section 2 - Select ", () => {beforeEach(() => {
    cy.intercept({url: '**',method: 'GET'},{ log: false }).as('requests');
    cy.intercept({url: '**',method: 'POST'},{ log: false }).as('postRequests');
    cy.intercept('GET', '**/*.png', { statusCode: 204 }).as('images');
    cy.intercept('HEAD', '**', { log: false }).as('headRequests');
}); 
it("Select", () => {
    cy.visit("https://www.timeanddate.com/")
    cy.title().should('eq', 'timeanddate.com')
    cy.wait(1500)

    cy.get("#month").should('be.visible').select("mayo")
    cy.wait(1500)

    cy.get("#month").should('be.visible').select("octubre").should('have.value', "10")
    cy.wait(1500)

    //Existen los multiselect -> cy.get("#month").should('be.visible').select(["mayo", "octubre"])
    //cy.get("#month").should('be.visible').select(["mayo", "octubre"]).then(() => {
        //    cy.get("botón").click)}  Primera promesa

    Cypress.on('uncaught:exception', () => false);
})
})