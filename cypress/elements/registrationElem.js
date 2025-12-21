export class RegistrationElements {
  title() {
    return cy.contains('Registration');
  }

  nameInput() {
    return cy.get('#signupName');
  }

  lastNameInput() {
    return cy.get('#signupLastName');
  }

  emailInput() {
    return cy.get('#signupEmail');
  }

  passwordInput() {
    return cy.get('#signupPassword');
  }

  rePasswordInput() {
    return cy.get('#signupRepeatPassword');
  }

  registerButton() {
    return cy.contains('button.btn.btn-primary', 'Register');
  }

  userEmailAlert() {
    return cy.get('.alert.alert-danger');
  }
}