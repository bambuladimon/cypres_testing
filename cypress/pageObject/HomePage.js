import { BasePage } from "./base/BasePage";

const url = "https://qauto.forstudy.space/"

export class HomePage extends BasePage {
    constructor() {
        super(url)
    }

    listButton(text) {
        return cy.contains(text)
    }
}