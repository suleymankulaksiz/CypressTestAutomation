class ProductListPage {

    firstProductClick(){
        cy.get("[class='image-overlay-body']").first().click();
        return this;
    }

    clickOverlay() {
        cy.get("[class='overlay']").click();
        return this;
    }

    lastProductClick(){
        cy.get("[class='image-overlay-body']").last().click();
        return this;
    }

    getProductClick(index){
        cy.get("[class='image-overlay-body']").eq(index).click();
        return this;
    }

}



export default ProductListPage;