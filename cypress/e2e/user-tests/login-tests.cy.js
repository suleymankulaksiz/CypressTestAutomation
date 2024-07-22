describe('Login Test', () => {

    it.only('Login Succsessful', () => {
        cy.visit("https://www.netflix.com/login");
        cy.get("[name='userLoginId']").type("denemehesabi299@outlook.com");
        cy.get("[data-uia='password-field']").type("159753QA");
        cy.get("[data-uia='login-submit-button']").click();
        cy.get("[id='signOut']").should('have.text', "Oturumu Kapat");
    })

    it('Login Unsuccsessful', () => {
        cy.visit("https://www.netflix.com/login");
        cy.get("[name='userLoginId']").type("denemehesabi@outlook.com");
        cy.get("[data-uia='password-field']").type("159753QA");
        cy.get("[data-uia='login-submit-button']").click();
        cy.get("[data-uia='error-message-container+header']").should('have.text', "Incorrect password for denemehesabi@outlook.com");
    })

})