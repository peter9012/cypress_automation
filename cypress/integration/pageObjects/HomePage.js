class HomePage
{
    getEditBox()
    {
        return cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
    }
}

export default HomePage;