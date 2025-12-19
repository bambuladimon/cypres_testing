export class BasePage {
  constructor(url, params) {
    this.url = url;
  }
  
    navigate(options = {}) {
        cy.visit(this.url, options);
    }
}