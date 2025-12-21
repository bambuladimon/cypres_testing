import { HomePage } from "../pageObject/HomePage"
import { RegistrationPage } from "../pageObject/RegistrationPage";
import { RegistrationElements } from "../elements/registrationElem";

describe('Testing qauto site for sdudy', () => {
  const homePage = new HomePage();
  const regPage = new RegistrationPage();
  const regEl = new RegistrationElements();

  beforeEach(() => {
    homePage.navigate({
        auth: {
        username: "guest",
        password: "welcome2qauto",
      }
    })
  })

  it('Register user with correct data', ()=> {
    regPage.visit()
            .fillName('Tsras')
            .fillLastName('TestoviQ')
            .fillEmail('bambula.dimon33@gmail.com')
            .fillPassword('123qweQ123')
            .fillRePassword('123qweQ123')
            .registerButton().click()
    cy.url().should('include', '/garage');
  });

  it('Register user with registered email', ()=> {
    regPage.visit()
            .fillName('Tsras')
            .fillLastName('TestoviQ')
            .fillEmail('bambula.dimon2222@gmail.com')
            .fillPassword('123qweQ123')
            .fillRePassword('123qweQ123')
            .registerButton().click()
    regPage.userEmailAlert('User already exists')
  });

  it('Check registration with incorrect name', ()=> {
    regPage.visit()
            .fillName('Tsras2')
    regEl.lastNameInput().should('have.class', 'ng-invalid');
  });

  it('Check registration with incorrect lastname', ()=> {
    regPage.visit()
            .fillLastName('TestoviQ3')
    regEl.lastNameInput().should('have.class', 'ng-invalid');
  });

  it('Login', ()=> {
    cy.login('bambula.dimon33@gmail.com', '123qweQ123');
    cy.url('contain', 'garage')
  })
})