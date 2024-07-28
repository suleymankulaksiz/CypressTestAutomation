/// <reference types="cypress" />
import LoginPage from "../pages/login-page";
import HomePage from "../pages/home-page";

describe('Login Test', () => {

    const loginPage = new LoginPage();
    const homePage = new HomePage();

    it('Login Succsessful', () => {
        loginPage.visit()
            .fiilEmail("sevdekulhan@gmail.com")
            .fillPassword("12345678S.k")
            .clickLogin();
        homePage.controlAccount("Hesabım");
    })

    it('Login Unsuccsessful', () => {
        loginPage.visit()
            .fiilEmail("sevdekuuulhan@gmail.com")
            .fillPassword("1234567k")
            .clickLogin()
            .errorMessageDisplayedControl();
    })

    it('Login InCorrectPassword', () => {
        loginPage.visit()
            .fiilEmail("sevdekulhan@gmail.com")
            .fillPassword("1234567k")
            .clickLogin()
            .errorMessageControl("E-posta adresiniz ve/veya şifreniz hatalı.");
        
    })

    it('Login maxKarakter', () => {
        loginPage.visit()
        .fiilEmail("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
        .fillPassword("12345678S.k")
        .clickLogin()
        .errorMessageControl("Lütfen geçerli bir e-posta adresi giriniz.");
    
    })

    it('Login RequiredControl', () => {
        loginPage.visit()
        // .fiilEmail(" ")
        // .fillPassword(" ")
        .clickLogin()
        .errorMessageControl("Lütfen geçerli bir e-posta adresi giriniz.")
        .fiilEmail("sevdekulhan@gmail.com")
        .clickLogin()
        .errorMessageControl("Lütfen şifrenizi giriniz.")
        .fillPassword("12345678S.k")
        .clickLogin();
        homePage.controlAccount("Hesabım");
    
    })

    it('Login passwordMaxKarakter', () => {
        loginPage.visit()
        .fiilEmail("sevdekulhan@gmail.com")
        .fillPassword("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
        .clickLogin()
        .errorMessageControl("E-posta adresiniz ve/veya şifreniz hatalı.");
    })



})