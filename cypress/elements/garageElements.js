export class GarageElements {
    
    addCarBtn() {
        return cy.contains('button.btn.btn-primary', 'Add car')
    }
  
    brandSelector() {
        return cy.get('select#addCarBrand')
    }

    modelSelector() {
        return cy.get('select#addCarModel')
    }

    milegelInput() {
        return cy.get('#addCarMileage')
    }

    submitCar() {
        return cy.contains('.modal-footer button.btn.btn-primary', 'Add')
    }

    carList() {
        return cy.get('.car-list')
    }

    carIthem() {
        return cy.get('.car_name')
    }

    addExpenseBtn() {
        return cy.get('.car_actions .car_add-expense')
    }

    addExpenseMilage() {
        return cy.get('#addExpenseMileage')
    }

    addExpenseLiters() {
        return cy.get('#addExpenseLiters')
    }

    addExpenseTotalCost() {
        return cy.get('#addExpenseTotalCost')
    }

    submitExpense() {
        return cy.contains('.modal-footer button.btn.btn-primary', 'Add')
    }
}