import { HomePage } from "../pageObject/HomePage"
import { RegistrationPage } from "../pageObject/RegistrationPage";


describe('Testing qauto site for sdudy', () => {
  const homePage = new HomePage();
  const regPage = new RegistrationPage();

  beforeEach(() => {
    homePage.navigate({
        auth: {
        username: "guest",
        password: "welcome2qauto",
      }
    })
  })

  it('Open register page', ()=> {
    regPage.visit()
    regPage.fillName('TestQ')
    regPage.fillLastName('TestoviQ')
    regPage.fillEmail('bambula.dimon222@gmail.com')
    regPage.fillPassword('123qweQ123')
    regPage.fillRePassword('123qweQ123')
    regPage.registerButton().click()
    cy.url().should('include', '/garage');
  })
})