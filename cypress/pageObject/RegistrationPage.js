import { RegistrationElements } from "../elements/registrationElem";

export class RegistrationPage {
  constructor() {
    this.el = new RegistrationElements();
  }

  visit() {
    cy.get('.hero-descriptor_btn').click();
    return this
  }

  submit() {
    this.el.registerButton().click();
    return this
  }

  fillName(value) {
    this.el.nameInput().clear().type(value);
    return this
  }

  fillLastName(value) {
    this.el.lastNameInput().clear().type(value);
    return this
  }

  fillEmail(value) {
    this.el.emailInput().clear().type(value);
    return this
  }

  fillPassword(value) {
    this.el.passwordInput().clear().type(value);
    return this
  }

  fillRePassword(value) {
    this.el.rePasswordInput().clear().type(value);
    return this
  }

  userEmailAlert(text) {
    this.el.userEmailAlert().should('have.text', text);;
    return this
  }

  registerButton() {
    return this.el.registerButton()
  }
}