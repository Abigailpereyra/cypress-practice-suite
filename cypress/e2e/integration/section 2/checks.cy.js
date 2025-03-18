///<reference types="cypress" /> 
require('cypress-xpath');
describe("Section 2 - checksbox ", () => {beforeEach(() => {
    cy.intercept({url: '**',method: 'GET'},{ log: false }).as('requests');
    cy.intercept({url: '**',method: 'POST'},{ log: false }).as('postRequests');
    cy.intercept('GET', '**/*.png', { statusCode: 204 }).as('images');
    cy.intercept('HEAD', '**', { log: false }).as('headRequests');
}); 
it("Tildar y destildar los checksboxs", () => {
    cy.visit("https://app.endtest.io/guides/docs/how-to-test-checkboxes")
    cy.title().should('eq', 'How to test Checkboxes · Endtest')
    cy.wait(1500)

    cy.get("[type='checkbox']").check().should('be.checked')
    cy.wait(1500)
    cy.get("[type='checkbox']").uncheck().should('not.be.checked')

    Cypress.on('uncaught:exception', () => false);
})
it("Tildar y destildar solo un checksbox", () => {
    cy.visit("https://app.endtest.io/guides/docs/how-to-test-checkboxes")
    cy.title().should('eq', 'How to test Checkboxes · Endtest')
    cy.wait(1500)

    cy.get("#pet1").check().should('be.checked')
    cy.wait(1500)
    cy.get("#pet1").uncheck().should('not.be.checked')

    /*cy.get("#pet1").click().should('be.checked')
    cy.get("#pet1").click().should('not.be.checked')*/
    
    Cypress.on('uncaught:exception', () => false);
})

it("Tildar y destildar los radiobuttons", () => {
    cy.visit("https://practice.expandtesting.com/radio-buttons")
    cy.title().should('eq', 'Radio Buttons page for Automation Testing Practice')
    cy.wait(1500)

    cy.get("[type='radio']").check({force:true}).should('be.checked')
    cy.wait(1500)

    //cy.get("[type='radio']").click().should('be.checked')

    Cypress.on('uncaught:exception', () => false);
})

it.only("Tildar y destildar un radiobutton", () => {
    cy.visit("https://practice.expandtesting.com/radio-buttons")
    cy.title().should('eq', 'Radio Buttons page for Automation Testing Practice')
    cy.wait(1500)

    cy.xpath("//*[@id='football']").check().should('be.checked')
    cy.wait(1500)

    //cy.get("//*[@id='football']").click().should('be.checked')

    Cypress.on('uncaught:exception', () => false);
})

})