import { GaragePage } from "../../pageObject/GaragePage";
import { GarageElements } from "../../elements/garageElements";

describe('Testing qauto site for sdudy', () => {
  const garagePage = new GaragePage();
  const garageEl = new GarageElements();
  let carId;
  let token;

  before(() => {
    garagePage.navigate({
        auth: {
        username: "guest",
        password: "welcome2qauto",
      }
    })
    garagePage.logIn()
    cy.request({
        method: 'POST',
        url: '/api/auth/signin',
        body: {
            email: 'bambula.dimon23@gmail.com',
            password: 'QWE123qwe',
        },
    }).then((resp)=> {
        token = resp.headers["set-cookie"][0].split(";")[0];
    })
  })

  it('Add car', ()=> {


    cy.intercept('POST', '/api/cars').as('addCar')

    garagePage.openAddPopup()
    .selectBrand('Fiat')
    .selectModel('Panda')
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
      expect(response.body.data.brand).to.eq('Fiat')
      expect(response.body.data.model).to.eq('Panda')
    })

    garageEl.carIthem().eq(0).should('have.text', 'Fiat Panda');
  })

  it('Chech that car was added', ()=> {
    cy.request({
      method: 'GET',
      url: '/api/cars',
      headers: {
        cookie: token,
      },
      body: {
        username: 'jane.lane',
        password: 'password123',
      },
    }).then((resp)=> {
      resp.body.data.forEach(car => {
        if (car.id == carId)
          console.log(`The car with id ${carId} was successfuly added!`);
      });
      
    })
  })

  it('Add expensive', ()=> {
    cy.addExpenseByCarId(token, carId)
    .then((resp)=> {      
      expect(resp.status).to.eq(200)
      expect(resp.body.status).to.eq("ok")
      expect(resp.body.data.carId).to.eq(carId)
    });
  })

  it('Validate expense via UI', () => {
    garagePage.navigate({
        auth: {
        username: "guest",
        password: "welcome2qauto",
      }
    })
    garagePage.logIn()
    .openExpensePage()
    cy.url('contain', `expenses?carId=${carId}`)
  })
})