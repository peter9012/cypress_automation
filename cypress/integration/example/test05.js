describe('My Fifth Test', () => {
    it('My Fifth Test',function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
    })
})