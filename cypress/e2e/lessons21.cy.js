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
    let carId;
    cy.intercept('POST', '/api/cars').as('addCar')

    garagePage.openAddPopup()
    .selectBrand('Audi')
    .selectModel('TT')
    .insertMileage(10)
    .addCar()

    cy.wait('@addCar').then(({ request, response }) => {
      // лог у консоль
      console.log('REQUEST:', request.body)
      console.log('RESPONSE:', response.body)
      // витягуємо айдішку автомобіля
      carId = response.body.data.id;
      console.log('carId: ', carId)

      expect(response.statusCode).to.eq(201)
      expect(response.body.data.brand).to.eq('Audi')
      expect(response.body.data.model).to.eq('TT')
    })

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