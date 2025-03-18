///<reference types="cypress" /> 

describe("Section 2 - Asserts ", () => {beforeEach(() => {
    cy.intercept({url: '**',method: 'GET'},{ log: false }).as('requests');
    cy.intercept({url: '**',method: 'POST'},{ log: false }).as('postRequests');
    cy.intercept('GET', '**/*.png', { statusCode: 204 }).as('images');
    cy.intercept('HEAD', '**', { log: false }).as('headRequests');
}); 
it("Asserts - cointain", () => {
    cy.visit("https://testsheepnz.github.io/BasicCalculator.html")
    cy.title().should('eq', 'Basic Calculator')
    cy.wait(1500)

    cy.get(".nav-link").should('be.visible').contains("Media").click()
    cy.wait(1500)

    Cypress.on('uncaught:exception', () => false);
})

it.only("Assert have.css y have.length", () => {
    cy.visit("https://demoqa.com/webtables");
    cy.get(':nth-child(3) > .rt-tr').should('have.length',3).and('have.css','font-size','1rem')
    
    Cypress.on('uncaught:exception', () => false);
}) 

it("Asserts - find, eq", () => {
    cy.visit("https://testsheepnz.github.io/BasicCalculator.html")
    cy.title().should('eq', 'Basic Calculator')
    cy.wait(1500)

    cy.get(".nav-link").should('be.visible').contains("Automation Kata").click()
    cy.wait(1500)

    cy.get(".col-md-4").find(".portfolio-hover").eq(1).click()

    Cypress.on('uncaught:exception', () => false);
})

it("Asserts - validando la condición y el precio", () => {
    cy.visit("https://www.automationexercise.com/")
    cy.title().should('eq', 'Automation Exercise')
    cy.wait(1500)

    cy.get(".col-sm-4").should('be.visible').contains("Men Tshirt")
    cy.wait(1500)

    cy.get(".product-image-wrapper").find(".choose").eq(1).click()
    cy.wait(1500)
    cy.get(".product-information > :nth-child(7)").then((e) => {
        cy.log(e.text())
        let estado = e.text()
        cy.log(estado)
        if (estado == "Condition: New") {
            cy.log("La camiseta es nueva")
        }
    })
    cy.get(":nth-child(5) > span").then((p) => {
        cy.log(p.text())
        let precio = p.text()
        cy.log(precio)
        precio = precio.slice(4)
        cy.log(precio)
        if (precio > 450) {
            cy.log("El precio sale de nuestro presupuesto")
            cy.get("#header > div > div > div > div.col-sm-4 > div > a > img").click()
        }else{
            cy.log("El precio es accesible")
            cy.get(":nth-child(5) > .btn").click()}
    
    })


    Cypress.on('uncaught:exception', () => false);
})

    it("Assert have.text y contain.text", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.get('#userName').should('be.visible').type("Abigail Naomi")
        cy.get('#userEmail').should("be.visible").should("be.enabled").type("email@mail.com")
        cy.get("#submit").should("be.visible").click()

        cy.get("#name").should('have.text', "Name:Abigail Naomi")
        cy.get("#email").should('contain.text', "mail")

        Cypress.on('uncaught:exception', () => false);
    });

    it("Assert have.value y contain.value con then", () => {
        cy.visit("https://demoqa.com/text-box");
        cy.get('#userName').should('be.visible').type("Abigail Naomi")

        cy.get("#userName").should('have.value', "Abigail Naomi").then(() => {
            cy.get('#userEmail').should("be.visible").should("be.enabled").type("email")
        })
        cy.get("#userName").should('contain.value', "Nao").then(() => {
            cy.get('#userEmail').should("be.visible").should("be.enabled").type("@mail.com")
            cy.get("#submit").should("be.visible").click()
        })
        Cypress.on('uncaught:exception', () => false);
    });

    it("Assert have.class y la funcion and", () => {
            cy.visit("https://demoqa.com/text-box");
            cy.get('#userName').should('be.visible').and('have.class','mr-sm-2 form-control').then(() => {
            cy.get('#userName').type("Abigail Naomi")}) //Valida si tiene la clase mr-sm-2 form-control y si es visible
    
            cy.get("#userName").should('have.value', "Abigail Naomi").then(() => {
                cy.get('#userEmail').should("be.visible").should("be.enabled").type("email@mail.com")
            })
        }) 
        Cypress.on('uncaught:exception', () => false);
    });

    //cy.contains([type='button'],'Media').click()

