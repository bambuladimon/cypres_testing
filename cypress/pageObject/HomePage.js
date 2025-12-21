import { BasePage } from "./base/BasePage";

const url = "/"

export class HomePage extends BasePage {
    constructor() {
        super(url)
    }

    listButton(text) {
        return cy.contains(text)
    }
}