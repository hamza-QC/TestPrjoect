
describe('Check that user was redirected to the correct URL at Democart', () => {
  before('Visit Homepage - Democart', () => {
      cy.visit('https://demo.opencart.com')
  });

  beforeEach('Verify the Login Page', () => {
      cy.get('.fa-user')
      .should('be.visible')
      .click()
      cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item')
      .should('be.visible')
      .click()

      cy.url()
      .should('contain', 'account/login')
      
      cy.get('h2')
      .should('be.visible')
      
      cy.contains('Returning Customer')
  });

  it('Do Login access to user', () => {
      cy.get('#input-email')
      .should('be.visible')
      .type('testing-user@gmail.com')

      cy.get('#input-password')
      .should('be.visible')
      .type('helloworld')

      cy.contains('a', 'Forgotten Password')
      .should('have.attr', 'href')

      cy.get('#form-login > .btn')
      .should('be.visible')
      .click()

      cy.get('#form-login > h2')
      .should('have.text', 'Returning Customer')
  });
});
