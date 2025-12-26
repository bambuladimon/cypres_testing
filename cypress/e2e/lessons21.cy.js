import { GaragePage } from "../pageObject/GaragePage";
import { GarageElements } from "../elements/garageElements";

describe('Testing qauto site for sdudy', () => {
  const garagePage = new GaragePage();
  const garageEl = new GarageElements();

  beforeEach(() => {
    garagePage.navigate({
        auth: {
        username: "guest",
        password: "welcome2qauto",
      }
    })
    garagePage.logIn()
  })

  it('Check that page is open', ()=> {
    
    cy.url('contain', '/garage')
  })

  it('Add car', ()=> {
    garagePage.openAddPopup()
    .selectBrand('Audi')
    .selectModel('TT')
    .insertMileage(250)
    .addCar()
    garageEl.carIthem().eq(0).should('have.text', 'Audi TT');
  })

  it('Add expense', ()=> {
    garagePage.openAddExpensePopup()
    .fillExpenseMileage(500)
    .fillExpenseLiters(5)
    .fillTotalCost(50)
    .addCar()
    cy.url('contain', 'expenses?carId=')
  })
})