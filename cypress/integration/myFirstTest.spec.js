describe('My first test', () => {
    
    it('should navigate to google url', function () {
        cy.visit("https://www.google.com");
        cy.wait(300);
    });

    it('should type into search box', function () {
        cy.get('.gLFyf').type("thais aparecida ferreira de souza");
    });

    it('should submit search', function () {
        cy.get('.FPdoLc > center > [value="Pesquisa Google"]').click({
            force: true
        });
    });
});