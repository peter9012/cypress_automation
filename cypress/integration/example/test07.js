
describe('My Seventh Test', () => {

    before(function() {
        cy.fixture('testuser').then(function(data){
            this.data = data
        })
    })
    it('My Seventh Test',function() {

        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        cy.get('select').select(this.data.gender)
    })
})