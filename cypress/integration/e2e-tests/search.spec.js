describe('SearchBox Test', () => {
    before(function () {
        cy.visit("http://zero.webappsecurity.com/index.html");
        cy.contains('Feedback').click();
    });

    it('should type into searchbox and press enter', function () {
        cy.get("#searchTerm").type('Some Text {enter}');
    });

    it('should show search results', function(){
        cy.get('h2').contains('Search Results');
    });
   

})