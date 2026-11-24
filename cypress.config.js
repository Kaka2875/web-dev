const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'cpress/cypress/e2e/**/*.cy.js',
    supportFile: false,
  },
});
