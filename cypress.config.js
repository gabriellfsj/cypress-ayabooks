const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
   baseUrl: 'https://aya.app.br/ayabooks/'

    // setupNodeEvents(on, config) {
       // implement node event listeners here
  //  },
  },
});
