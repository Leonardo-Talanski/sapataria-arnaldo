describe('Testes do navmenu', function () {
    
    
    before(function (){

        cy.log('Iniciando testes da navbar');



    });


    beforeEach(function () {

        cy.visit('/index.html');


    });

    it('deve ter a classe .nav-menu', function () {


        cy.visit('/index.html');
        cy.get('nav').should('have.class', 'nav-menu');


    });



    /* ==== Test Created with Cypress Studio ==== */
    it('teste de href válido para cada página', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[data-test=home]').should('have.attr', 'href', './index.html');
        cy.get('[data-test=catalogo]').should('have.attr', 'href', './catalog.html');
        cy.get('[data-test=sobre-nos]').should('have.attr', 'href', './about-us.html');
        cy.get('[data-test=contato]').should('have.attr', 'href', './contact.html');
        /* ==== End Cypress Studio ==== */
    });
})