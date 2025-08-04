it('Crear nuevo requisito', () => {
  cy.visit('http://localhost:3000');
  cy.get('#email').type("prueba17@mail.com");
  cy.get('#password').type("12345678");
  cy.get('.register_registerForm__qAG8I > button').click();
  cy.get('.fixed').should('be.visible');

  cy.get('.home-page_myProjects__petwM > a').click();
  cy.get('.my-proyects_proyect__pPRGN').click();
  cy.get('[href="/my-proyects/57//requirements"]').click();
  cy.get('button > img').click();
  cy.get('#title').type('Nuevo Requisito 1');
  cy.get('#description').type('Descripción del nuevo requisito');
  cy.get('#functional').select('Funcional');
  cy.get('#priority').type('2');
  cy.get('.modals_crearButton__ysTxQ').click();
  cy.contains('Nuevo Requisito 1').should('exist');

});
