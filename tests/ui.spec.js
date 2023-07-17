const { test, expect } = require('../utilities/hook');



test('sortByPrice - high to low', async ({productsPage}) =>{    
   expect(productsPage.inventoryLabel).toHaveCount(6)
   expect(await productsPage.sortByPrice()).toEqual(true)

});


test('sortByName - Z to A ', async ({productsPage}) =>{
    expect(await productsPage.sortByName()).toEqual(true)
 });

 test('Complete Checkout', async ({productsPage}) =>{       
    await productsPage.addFirstItem()
    await expect (productsPage.shoppingBadge).toBeVisible()
    const cartPage = await productsPage.clickCartButton()
    const checkout = await cartPage.clickCheckoutButton()
    await checkout.completeInformation()
    const checokOver = await checkout.clickContinueButton()
    await checokOver.completeCheckout()
    await expect(checokOver.successToast).toBeVisible()

 
 });



test.afterEach(async ({page}) =>{
    page.close()


})