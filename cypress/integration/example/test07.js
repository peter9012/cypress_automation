import HomePage from '../pageObjects/HomePage'
import ProductPage from '../pageObjects/ProductPage'
describe('My Seventh Test', () => {

    before(function() {
        cy.fixture('testuser').then(function(data){
            this.data = data
        })
    })
    it('My Seventh Test',function() {
        Cypress.config('defaultCommandTimeout', 8000)
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
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
            cy.log($el.text())
        })
        cy.contains('Checkout').click()
        cy.get('#country').type('United States')
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').click({force: true})
        cy.get('input[type="submit"]').click()
        // cy.get('alert').should('have.text','Thank you! Your order will be delivered in next few weeks :-)')
        cy.get('.alert').then(function(element){
            const actualText = element.text()
            expect(actualText.includes("Success")).to.be.true
        })
    })
})