export class BasePage {
  constructor(url) {
    this.url = url;
  }
  
  navigate(options = {}) {
      cy.visit(this.url, options);
  }
}