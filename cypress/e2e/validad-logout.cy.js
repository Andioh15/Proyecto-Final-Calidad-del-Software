Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('NEXT_REDIRECT')) {
    return false;
  }
});

describe('Validar logout', () => {
  it('Cerrar sesión correctamente', () => {
    cy.visit('http://localhost:3000');
    cy.get('#email').type("prueba17@mail.com");
    cy.get('#password').type("12345678");
    cy.get('.register_registerForm__qAG8I > button').click();
    cy.get('.fixed').should('be.visible');

    cy.get('a > .app-header_headerButton__X0iS6').click();
    cy.url().should('include', '/user');

    cy.get('.user-page_LogoutButton__fGU86').click();

    cy.url().should('include', '/user-auth/login');
  });
});
