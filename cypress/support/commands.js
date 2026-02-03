// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
 Cypress.Commands.add('login', (email, password) => {
    cy.get('.header_signin').click()
    cy.get('#signinEmail').type(email)
    cy.get('#signinPassword').type(password, { sensitive: true })
    cy.contains('button.btn.btn-primary', 'Login').click();
 })

Cypress.Commands.add('addExpenseByCarId', (token, id) => {
  return cy.request({
    method: 'POST',
    url: `/api//expenses`,
    headers: {
      cookie: token,
    },
    body: {
      "carId": id,
      "reportedAt": "2025-12-26",
      "mileage": 999,
      "liters": 11,
      "totalCost": 11,
      "forceMileage": false
    }
  })
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
  if (options && options.sensitive) {
    // turn off original log
    options.log = false
    // create our own log with masked message
    Cypress.log({
      $el: element,
      name: 'type',
      message: '*'.repeat(text.length),
    })
  }

  return originalFn(element, text, options)
})