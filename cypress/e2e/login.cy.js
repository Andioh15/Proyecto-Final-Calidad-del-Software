describe("Login de usuario", () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it("Validar login exitoso", () => {
    cy.get('#email').type("prueba17@mail.com");
    cy.get('#password').type("12345678");
    cy.get('.register_registerForm__qAG8I > button').click();

    cy.get('.fixed').invoke('text').then((text) => {
      cy.log('Texto del toast:', text);
    });

    cy.get('.fixed').should('be.visible');
    cy.url().should('include', '/');
  });

});
