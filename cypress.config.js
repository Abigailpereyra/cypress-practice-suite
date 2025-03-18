const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //permite hacer una grabación manual de los test
   experimentalStudio: true,
   specPattern: "cypress/e2e/**/*.cy.js",
  }
  
});
