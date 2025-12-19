import { RegistrationElements } from "../elements/registrationElem";

export class RegistrationPage {
  constructor() {
    this.el = new RegistrationElements();
  }

  visit() {
    cy.get('.hero-descriptor_btn').click();
  }

  submit() {
    this.el.registerButton().click();
  }

  fillName(value) {
    this.el.nameInput().clear().type(value);
  }

  fillLastName(value) {
    this.el.lastNameInput().clear().type(value);
  }

  fillEmail(value) {
    this.el.emailInput().clear().type(value);
  }

  fillPassword(value) {
    this.el.passwordInput().clear().type(value);
  }

  fillRePassword(value) {
    this.el.rePasswordInput().clear().type(value);
  }

  registerButton() {
    return this.el.registerButton()
  }

  errorShouldBeVisible(text) {
    this.el.errorMessage(text).should('be.visible');
  }

  inputShouldHaveRedBorder(inputElementFn) {
    inputElementFn().should(
      'have.css',
      'border-color',
      'rgb(220, 53, 69)'
    );
  }
}