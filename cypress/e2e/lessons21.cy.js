import { GaragePage } from "../pageObject/GaragePage";

describe('Testing qauto site for sdudy', () => {
  const garagePage = new GaragePage();

  beforeEach(() => {
    garagePage.navigate({
        auth: {
        username: "guest",
        password: "welcome2qauto",
      }
    })
  })

  it('Check that page is open', ()=> {
    garagePage.logIn()
    cy.url('contain', '/garage')
  })

  it('Add car', ()=> {
    garagePage.logIn().openAddPopup()
  })
})