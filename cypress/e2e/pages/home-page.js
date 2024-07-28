class HomePage{

    controlAccount(value) {
        cy.get("[class='link account-user'] p").should('have.text',value);
        return this;
    }

}
export default HomePage;