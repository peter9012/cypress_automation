class HomePage
{
    getEditBox()
    {
        return cy.get('input[name="name"]:nth-child(2)')
    }

    getTwoWayDataBingding()
    {
        return cy.get(':nth-child(4) > input.ng-untouched')
    }

    getGender()
    {
        return cy.get('select')
    }

    getEntrepreneaur()
    {
        return cy.get('#inlineRadio3')
    }
    
    getShopTab()
    {
        return cy.get(':nth-child(2) > a.nav-link')
    }
}

export default HomePage;