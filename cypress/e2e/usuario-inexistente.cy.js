describe("Login de usuario inexistente", () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/user-auth/login');
  });

  it('Login de usuario inexistente', () => {
  cy.visit('http://localhost:3000/user-auth/login');

  cy.get('#email').type('noexiste@mail.com');
  cy.get('#password').type('contrasenaIncorrecta');
  cy.get('.register_registerForm__qAG8I > button').click();

  cy.wait(1000); // darle tiempo al error

  cy.url().should('include', '/login');
});


});
