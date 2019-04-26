describe('NavBar Test', () => {

    it('should navigate to homepage', function () {
        cy.visit("http://zero.webappsecurity.com/index.html");
        cy.wait(300);
    });

    it('should click on Online Banking', function () {
        cy.contains('Online Banking').click();
        //or
        //    cy.get('#onlineBankingMenu > div > strong').click();
        cy.get('h1').should("be.visible");
        cy.url().should("include", "online-banking")
    });

    it('should click on Feedback', function () {
        cy.contains('Feedback').click();
        cy.get('#feedback-title').should("be.visible");
        cy.url().should("include", "feedback")
    });

    it('should navegate back to homepage', function () {
        cy.contains('Zero Bank').click();        
        cy.url().should("include", "index")
    });
});