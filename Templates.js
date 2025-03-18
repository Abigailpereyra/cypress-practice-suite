///<reference types="cypress" /> 
//Asi funcionan los comandos de cypress
describe(" ", () => {
    beforeEach(() => {
        // Interceptar y suprimir logs de peticiones específicas
        cy.intercept(
          {
            url: '**', // Todas las URLs
            method: 'GET', // Solo métodos GET
          },
          { log: false } // Desactiva los logs
        ).as('requests');
        cy.intercept(
            {
              url: '**', // Todas las URLs
              method: 'POST', // Solo solicitudes POST
            },
            { log: false } // Desactiva los logs
          ).as('postRequests');
        
        cy.intercept('GET', '**/*.png', { statusCode: 204 }).as('images'); // Bloquea imágenes PNG
         // Interceptar solicitudes de tipo HEAD
        cy.intercept('HEAD', '**', { log: false }).as('headRequests'); // Manejar HEAD
    });
    it(" ", () => {
        cy.visit(" ")
    })
})    //cierre de describe

beforeEach(() => {
    cy.intercept({url: '**',method: 'GET'},{ log: false }).as('requests');
    cy.intercept({url: '**',method: 'POST'},{ log: false }).as('postRequests');
    cy.intercept('GET', '**/*.png', { statusCode: 204 }).as('images');
    cy.intercept('HEAD', '**', { log: false }).as('headRequests');
}); 

// Para que no se muestren errores en la consola y no se detenga la ejecución
Cypress.on('uncaught:exception', () => false);
