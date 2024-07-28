/// <reference types="cypress" />
import LoginPage from "../pages/login-page";
import HomePage from "../pages/home-page";
import MainPage from "../pages/main-page";
import ProductListPage from "../pages/product-list-page";
describe('Basket Test', () => {

    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const mainPage = new MainPage();
    const productListPage = new ProductListPage();

    it('Add To Product', () => {
        loginPage.visit()
            .fiilEmail("sevdekulhan@gmail.com")
            .fillPassword("12345678S.k")
            .clickLogin();
        homePage.controlAccount("Hesabım");
        // mainPage.fiilSearch("Laptop")
        mainPage.fillSearchAndPressEnter("Telefon");

        productListPage
        .firstProductClick()
        .clickOverlay();
        
    })


    


 })