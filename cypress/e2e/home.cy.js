describe('Testes na home', () => {
  it('Abre o diretório', () => {
    cy.visit('/')

    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-test="home"]').should('have.attr', 'href', 'index.html');
    cy.get('[data-test="catalogo"]').should('have.attr', 'href', 'catalog.html');
    cy.get('[data-test="sobre-nos"]').should('have.attr', 'href', 'about-us.html');
    cy.get('[data-test="contato"]').should('have.attr', 'href', 'contact.html');
    /* ==== End Cypress Studio ==== */
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