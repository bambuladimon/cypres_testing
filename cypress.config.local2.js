const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qauto2.forstudy.space/',
    env: {
      USER_EMAIL: 'bambula.dimon22@gmail.com',
      USER_PASSWORD: 'QWE123qwe'
    }
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
  },
});
