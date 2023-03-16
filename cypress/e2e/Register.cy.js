
describe('Create a new Account at Democart', () => {
    before('Visit Homepage - Democart', () => {
        cy.visit('https://demo.opencart.com')        
    });

    beforeEach('Verify My Account to create a Register', () => {
        cy.get(':nth-child(2) > .dropdown > .dropdown-toggle > .d-none')
        .should('be.visible')
        .click()
        cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-item')
        .should('be.visible')
        .click()        
    });

    it('Register a new Account with Full Details', () => {
        cy.contains('Register Account')
        .should('be.visible')

        cy.get('#input-firstname')
        .should('be.visible')
        .type('Testing')
        .should('have.text','')

        cy.get('#input-lastname')
        .should('be.visible')
        .type('User')

        cy.get('#input-email')
        .should('be.visible')
        .type('testing-user@example.com')

        cy.get('#input-password')
        .should('be.visible')
        .type('helloworld')

        cy.get('.col-sm-10 > :nth-child(2) > input')
        .should('be.visible')
        .first().check()

        cy.get('[type="checkbox"]')
        .should('be.visible')
        .check()

        cy.get('.float-end > .btn')
        .should('be.visible')
        .click()
        
    });
});