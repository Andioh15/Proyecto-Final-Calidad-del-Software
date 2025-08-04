it('Crear historia de usuario', () => {
  cy.visit('http://localhost:3000');
  cy.get('#email').type("prueba17@mail.com");
  cy.get('#password').type("12345678");
  cy.get('.register_registerForm__qAG8I > button').click();
  cy.get('.fixed').should('be.visible');

  cy.get('.home-page_myProjects__petwM > a').click();
  cy.get('.my-proyects_proyect__pPRGN').click();
  cy.get('[href="/my-proyects/57//user-stories"]').click();
  cy.get('button > img').click();
  cy.get('#titulo').type('Nueva Historia de Usuario 1');
  cy.get('.modals_unselectedButton__oKaxJ').click();
  cy.get('#prioridad').type('3');
  cy.get('#descripcion').type('Descripción de la nueva historia de usuario');
  cy.get('#criteriosAceptacion').type('Criterios de aceptación de la nueva historia de usuario');
  cy.get('.modals_addEntryButton__7PQ8k').click();
  cy.get('.modals_crearButton__ysTxQ').click();
});
