const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://gallery-app.vivifyideas.com/',
    
    env: {
      existingUserEmail: "markoqa13@gmail.com",
      validPassword: "Marko123"
    }
  },
});
