describe("Hola todos esta es la seccion 1 del curso", () => {
    it("Mi primer test -> Hola mundo", () => {
        cy.log("Hola mundo")
        cy.wait(2000);
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
           });
    })
    
    it ("Mi segundo test -> Campo name", () => {
        cy.visit("https://demoqa.com/text-box");

        cy.get("#userName").type("Abigail Naomi");
        cy.wait(2000);
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
           });
        
    });
});    //cierre de describe