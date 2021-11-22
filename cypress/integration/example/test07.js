import HomePage from '../pageObjects/HomePage'
import ProductPage from '../pageObjects/ProductPage'
describe('My Seventh Test', () => {

    before(function() {
        cy.fixture('testuser').then(function(data){
            this.data = data
        })
    })
    it('My Seventh Test',function() {
        const homePage = new HomePage()
        const productPage = new ProductPage()
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBingding().should('have.value',this.data.name)
        homePage.getEditBox().should('have.attr','minlength','2')
        homePage.getEntrepreneaur().should('be.disabled')
        homePage.getShopTab().click()
        this.data.productName.forEach(element => {
            cy.selectProduct(element) 
        });
        productPage.checkOutButton().click()
    })
})