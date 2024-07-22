/// <reference types = "cypress" />

describe('Login Tests', () => {
    
    it("Login Succsessful",() => {
        cy.visit('https://www.netflix.com/login');
    })

});