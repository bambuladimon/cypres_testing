import { BasePage } from "./base/BasePage";
import { GarageElements } from "../elements/garageElements";

const baseUrl = Cypress.config('baseUrl');
const url = "garage"

export class GaragePage extends BasePage {
    constructor() {
        super(url)
        this.el = new GarageElements()
    }

    logIn() {
        cy.login(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
        return this;
    }

    openAddPopup() {
        this.el.addCarBtn().click()
        return this;
    }

    selectBrand(name) {
        this.el.brandSelector().select(name)
        return this
    }

    selectModel(name) {
        this.el.modelSelector().select(name)
        return this
    }

    insertMileage(mileage) {
        this.el.milegelInput().type(mileage)
        return this
    }

    addCar() {
        this.el.submitCar().click()
        return this
    }

    carList() {
        this.el.carList()
        return this
    }

    carIthem() {
        this.el.carIthem()
        return this
    }

    openAddExpensePopup() {
        this.el.addExpenseBtn().eq(0).click()
        return this
    }

    getCurrentMilage() {
        this.el.addExpenseMilage().invoke('val') 
    }

    fillExpenseMileage(milage) {
        this.el.addExpenseMilage().clear().type(milage)
        return this
    }

    fillExpenseLiters(liters) {
        this.el.addExpenseLiters().clear().type(liters)
        return this
    }

    fillTotalCost(cost) {
        this.el.addExpenseTotalCost().clear().type(cost)
        return this
    }

    openExpensePage() {
        this.el.expenseLink().click()
        return this
    }
}