describe('My Third Test', () => {
    it('My Thrid Test',function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()
        cy.on('window:alert',(str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.url().should('include','academy')

        cy.go('back')
    })
})