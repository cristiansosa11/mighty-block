const { BasePage } = require("./BasePage")
const { HomePage, ProductsPage } = require("./ProductsPage")
const user = require('../utilities/user.json')


class LoginPage extends BasePage {
    constructor(page){
        super(page)
        this.emailField = page.locator("//input[@id='user-name']")
        this.passwordField = page.locator("//input[@id='password']")
        this.loginButton = page.locator("//input[@id='login-button']")

    }

    // This function completes the login using a static data provider from a Json File 
    async completeLogin(){
        console.log("filling user data")
        await this.emailField.type(user.username)
        await this.passwordField.type(user.password)
        await this.loginButton.click()
        const productsPage = new ProductsPage(this.page)
        return productsPage
        
    }


    async goTo (){        
        await this.page.goto("https://www.saucedemo.com/")  

    }
}

module.exports = {LoginPage};