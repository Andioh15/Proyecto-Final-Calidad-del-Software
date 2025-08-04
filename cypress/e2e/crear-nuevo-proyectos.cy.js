it('Crear nuevo proyecto', () => {
  
  cy.visit('http://localhost:3000');
  cy.get('#email').type("prueba17@mail.com");
  cy.get('#password').type("12345678");
  cy.get('.register_registerForm__qAG8I > button').click();
  cy.get('.fixed').should('be.visible');

  cy.get('.home-page_newProject__2oCR8 > a').click();
  cy.get('#name').type('Nuevo Proyecto de Prueba');
  cy.get('button').click();
  cy.get('.fixed').should('be.visible');
  
  cy.get('.home-page_myProjects__petwM > a').click();
});
