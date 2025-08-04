it('Crear nuevo caso de uso', () => {
  cy.visit('http://localhost:3000');
  cy.get('#email').type("prueba17@mail.com");
  cy.get('#password').type("12345678");
  cy.get('.register_registerForm__qAG8I > button').click();
  cy.get('.fixed').should('be.visible');

  cy.get('.home-page_myProjects__petwM > a').click();
  cy.get('.my-proyects_proyect__pPRGN').click();
  cy.get('[href="/my-proyects/57//use-cases"]').click();
  cy.get('button > img').click();

  cy.get('#titulo').type('Nuevo Caso de Uso 1');
  cy.get('.modals_unselectedButton__oKaxJ').click();
  cy.get('#proposito').type('Propósito del nuevo caso de uso');
  cy.get('#descripcion').type('Descripción del nuevo caso de uso');
  cy.get('#importancia').select('Alta');

  cy.get('#flujoNormal').type('Flujo normal del nuevo caso de uso');
  cy.get(':nth-child(8) > .modals_addEntryButton__7PQ8k').click();

  cy.get('#flujoAlternativo').type('Flujo alternativo del nuevo caso de uso');
  cy.get(':nth-child(9) > .modals_addEntryButton__7PQ8k').click();

  cy.get('.modals_crearButton__ysTxQ').click();

  cy.wait(1000);

  cy.get('body').invoke('text').then(console.log);

  cy.contains('Caso').should('exist');
});
