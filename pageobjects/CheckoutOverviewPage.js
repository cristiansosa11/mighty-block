const { BasePage } = require("./BasePage")

class CheckoutOverviewPage extends BasePage{
    constructor(page){
        super(page)
        this.finishButton = page.locator("//button[@id='finish']")
        this.cancelButton = page.locator("//button[@id='cancel']")
        this.successToast = page.locator("[class='complete-header']")



    }
    async completeCheckout (){
        await this.finishButton.click()
    }

}


module.exports = {CheckoutOverviewPage}