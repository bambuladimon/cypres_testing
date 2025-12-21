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
}