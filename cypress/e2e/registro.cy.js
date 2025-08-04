describe('Registro de usuario', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('NEXT_REDIRECT')) {
      return false;
    }
  });

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it("Validar registro", () => {
    cy.get('.register_registerButton__sUJz0').click()
    cy.url().should('include', '/user-auth/register')

    cy.get('#email').type("prueba19@mail.com")
    cy.get('#name').type("prueba19")
    cy.get('#password').type("12345678")
    cy.get('#confirmPassword').type("12345678")
    cy.get('.register_registerForm__qAG8I > button').click()

    cy.url().should('include', '/')
    cy.get('.fixed').should('be.visible') 

    cy.get('a > .app-header_headerButton__X0iS6').click()
    cy.url().should('include', '/user')

    
  });

});
