export class GarageElements {
    
    addCarBtn() {
        return cy.contains('button.btn.btn-primary', 'Add car');
    }
  
    brandSelector() {
        return cy.get('select#addCarBrand')
    }

    modelSelector() {
        return cy.get('select#addCarModel');
    }

    milegelInput() {
        return cy.get('#addCarMileage');
    }

    submitCar() {
        return cy.get('button.btn.btn-primary', 'Add')
    }

    cancelCar() {
        return cy.get('button.btn.btn-secondary', 'Cancel')
    }
}