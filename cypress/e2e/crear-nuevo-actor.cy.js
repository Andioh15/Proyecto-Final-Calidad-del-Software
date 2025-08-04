it('Crear un actor', () => {
  cy.visit('http://localhost:3000');
  cy.get('#email').type("prueba17@mail.com");
  cy.get('#password').type("12345678");
  cy.get('.register_registerForm__qAG8I > button').click();
  cy.get('.fixed').should('be.visible');

  cy.get('.home-page_myProjects__petwM > a').click();
  cy.get('.my-proyects_proyect__pPRGN').click();
  cy.get('[href="/my-proyects/57//actors"]').click();
  cy.get('button > img').click();

  cy.get('#nombre').type('Actor de prueba');
  cy.get('#descripcion').type('Actor de prueba');
  cy.get('#rol').select('Cliente');
  cy.get('.modals_crearButton__ysTxQ').click();

  cy.contains('Actor de prueba').should('exist');
});
