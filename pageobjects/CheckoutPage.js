const { BasePage } = require("./BasePage");
const {faker, th} = require('@faker-js/faker');
const { CheckoutOverviewPage } = require("./CheckoutOverviewPage");
const {RandomDataGenerator} = require('../utilities/RandomDataGenerator')

const random = new RandomDataGenerator()

class CheckoutPage extends BasePage{
    constructor(page){
        super(page)
        this.firstNameField = page.locator("//input[@id='first-name']")
        this.lastNameField = page.locator("//input[@id='last-name']")
        this.zipCodeField = page.locator("//input[@id='postal-code']")
        this.continueButton = page.locator("//input[@id='continue']")

    }
    // This function completes the personal information using a dynamic data provider from a faker 
   async completeInformation (){      
        console.log("filling personal data") 
        await this.firstNameField.type(await random.getFirstName())
        await this.lastNameField.type(await random.getLastName())
        await this.zipCodeField.type(await random.getZipCode())        

   }

   async clickContinueButton (){
        await this.continueButton.click()
        const checkoutOverview = new CheckoutOverviewPage(this.page)
        return checkoutOverview
   }

}


module.exports = {CheckoutPage}