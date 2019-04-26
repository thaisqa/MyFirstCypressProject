describe('FeedBack Test', () => {
    before(function () {
        cy.visit("http://zero.webappsecurity.com/index.html");
        cy.contains('Feedback').click();
    });

    it('should load feedback form', function () {
        cy.get('form').should('be.visible');
    });

    it('should fill feedback form', function () {
        cy.get('#name').type('thais');
        cy.get('#email').type('thais_ferreirasouza@yahoo.com.br');
        cy.get('#subject').type('random subject');
        cy.get('textarea').type('random comment');
        cy.get('.btn-signin').click();

    });

    it('should show feedback message', function () {
        cy.get('#feedback-title').contains('Feedback');
    })


})