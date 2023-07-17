const { BasePage } = require("./BasePage")
const { CheckoutPage } = require("./CheckoutPage")

class CartPage extends BasePage {
    constructor(page){
        super(page)
        this.continueShoppingButton = page.locator("//button[@id='continue-shopping']")
        this.checkoutButton = page.locator("//button[@id='checkout']")        
        
    }


    async clickCheckoutButton(){
        await this.checkoutButton.click()
        const checkoutPage = new CheckoutPage(this.page)
        return checkoutPage
    }
}

module.exports = {CartPage};