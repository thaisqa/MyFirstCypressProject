describe('Password Test', () => {
    before(function () {
        cy.visit("http://zero.webappsecurity.com/index.html");
        cy.contains('Feedback').click();
    });

    it('should click on signin button', function () {
        cy.get("#signin_button").click();
    });

    it('should click on forgotten password', function () {
        cy.get('.offset3 > a').click();
    });

    it('should fill email input', function () {
        cy.get('#user_email').type("email@email.com");
        cy.get('.btn').click();
    });

    it ('should submit form', function(){
        cy.contains('Send Password').click();
    });

})