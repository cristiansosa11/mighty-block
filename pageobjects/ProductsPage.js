const { name } = require("../playwright.config")
const { BasePage } = require("./BasePage")
const {CartPage} = require("./CartPage")

class ProductsPage extends BasePage {
    constructor(page){
        super(page)
        this.inventoryLabel = page.locator("[class='inventory_item_label']")
        this.cartButton = page.locator("[class='shopping_cart_link']")       
        this.sortButton = page.locator("[class='product_sort_container']")
        this.addToCartButton = page.locator("[class='btn btn_primary btn_small btn_inventory']")
        this.elementName = page.locator("[class='inventory_item_name']")
        this.elementPrice = page.locator("[class='inventory_item_price']")
        this.shoppingBadge = page.locator("[class='shopping_cart_badge']")
    }
    //This function redirects to the Cart Page
    async clickCartButton (){
        await this.cartButton.click()
        const cartPage = new CartPage(this.page)
        return cartPage
    }
    //This function compares the sort of the products before and after the user clicks on the Z-A option of the dpopdown
    async sortByName(){
      
        const names = await this.elementName.allTextContents()
        const namesBeforeClick = await names.reverse()
        await this.sortButton.selectOption('za')
        const namesAfterClick = await this.elementName.allTextContents()      

        const isEqual = JSON.stringify(namesBeforeClick) === JSON.stringify(namesAfterClick)
        return isEqual 
       
    }
    //This function compares the sort of the products before and after the user clicks on the High to low option of the dpopdown
    async sortByPrice (){
        const prices = await this.elementPrice.allTextContents()
        const pricesBeforeClick = [];
        const pricesAfterClick =[];        
        for(let i = 0; i<prices.length; i++){
           pricesBeforeClick.push(parseInt(prices[i].slice(1)))
        }

        
        pricesBeforeClick.sort(function(a,b){
            return b-a
        }) 


        await this.sortButton.selectOption('hilo')


        const orderedPrices = await this.elementPrice.allTextContents()
        for(let i = 0; i<orderedPrices.length; i++){
            pricesAfterClick.push(parseInt(orderedPrices[i].slice(1)))
         }        
        
        const isEqual = JSON.stringify(pricesBeforeClick) === JSON.stringify(pricesAfterClick)
        console.log(isEqual)
        return isEqual;       

    }
    //This function click the first product of the list
    async addFirstItem (){
        await this.addToCartButton.first().click()
    }
    
}



module.exports = {ProductsPage}; 