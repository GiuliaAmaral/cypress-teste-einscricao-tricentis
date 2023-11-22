const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    baseUrlTricentis: "https://sampleapp.tricentis.com/",
    baseUrlEIscricao: "https://checkout.einscricao.app"
  },
  e2e: {
    video: true,
    videoCompression: true,
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
