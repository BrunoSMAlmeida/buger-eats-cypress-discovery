const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      projectId: "m1tvxw",
      "viewportWidth": 1440,
      "viewportHeight": 900,
      "baseUrl": "https://buger-eats-qa.vercel.app/",
    setupNodeEvents(on, config) {
    },
  },


});
