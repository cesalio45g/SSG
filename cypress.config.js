const { defineConfig } = require('cypress');

module.exports = defineConfig({
   video: true,
   e2e: {
      baseUrl: 'https://practice.expandtesting.com',
      experimentalRunAllSpecs: true,
      specPattern: './cypress/e2e/**/*.cy.js',
      setupNodeEvents(on, config) {
         // implement node event listeners here
      },
      screenshotsFolder: './cypress/screenshots',
      testIsolation: false,
      video: true,
      videoFolder: './cypress/videos',
      viewportHeight: 1280,
      viewportWidth: 720,
   },
});
