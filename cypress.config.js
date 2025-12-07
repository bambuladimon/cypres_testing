const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://google.com',
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});
