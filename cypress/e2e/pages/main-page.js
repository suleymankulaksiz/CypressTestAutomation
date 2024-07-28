class MainPage {

    fiilSearch(value) {
        cy.get("[data-testid='suggestion']").type(value, { delay: 100 });
        cy.get("[data-testid='search-icon']").click();
        return this;
    }

    fillSearchAndPressEnter(value) {
        cy.get("[data-testid='suggestion']").clear();
        cy.get("[data-testid='suggestion']").type(value + "{enter}", { delay: 100 });
        return this;
    }

}

export default MainPage;