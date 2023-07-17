const { test, expect} = require('@playwright/test');
const {LoginPage} = require('../pageobjects/LoginPage');
const { use } = require('../playwright.config');


exports.expect = expect
exports.test = test.extend({
    productsPage: async ({page}, use) =>{
    const loginPage = new LoginPage(page)
    await loginPage.goTo()
    const productPage = await loginPage.completeLogin()
    await use(productPage)
     
        
    },
});
