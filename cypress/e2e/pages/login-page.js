class LoginPage{

    visit() {
        cy.visit("https://www.trendyol.com/giris");
        return this;
    }

    fiilEmail(value) {
        cy.get("[id='login-email']").type(value, {delay:100});
        return this;
    }

    fillPassword(value){
        cy.get("[id='login-password-input']").type(value);
        return this;
    }

    clickLogin(){
        cy.get("[class='q-layout login'] button").click();
        return this;
    }

    errorMessageDisplayedControl() {
        cy.get("[class='message']").should("be.visible");
        return this;
    }

    errorMessageControl(value) {
        cy.get("[class='message']").should('have.text', value);
        return this;
    }
}

export default LoginPage;