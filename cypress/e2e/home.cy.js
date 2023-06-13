describe('Testes na home', () => {
  it('Abre o diretório', () => {
    cy.visit('/')

  })

  it('Abre a página index', () => {
    cy.visit('/index.html')

  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Título da página', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/index.html');
    cy.get('.home').click();
    cy.get('.home > :nth-child(3)').should('have.text', 'Filosofia da Empresa');
    cy.get('.home > :nth-child(4)').should('be.visible');
    /* ==== End Cypress Studio ==== */
  });
})