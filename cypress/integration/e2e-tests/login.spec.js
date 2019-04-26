describe('Login Test', () => {
    before(function () {
        cy.visit("http://zero.webappsecurity.com/index.html");
        cy.contains('Signin').click();
    });

    it('should load login form', function(){
        cy.get('#login_form').should('be.visible');
    });

    it('should fill login form', function(){
        cy.loginToApp('Name', 'password');
    });

    it('should show error message', function(){
        cy.get('.alert').contains('are wrong');
    });
})

