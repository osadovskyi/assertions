  it('How to check URL', () => {
    cy.visit('/commands/assertions')
    
    cy.url().should('contain', '/commands/assertions');
    cy.url().should('contain', '/commands/');
    cy.url().should('eq', `${Cypress.config().baseUrl}/commands/assertions`);

    cy.location().then( location => {
      expect(location.hash).to.be.empty;
      expect(location.host).to.eq('localhost:8080');
      expect(location.hostname).to.eq('localhost');
      expect(location.href).to.eq('http://localhost:8080/commands/assertions');
      expect(location.origin).to.eq('http://localhost:8080');
      expect(location.pathname).to.eq('/commands/assertions');
      expect(location.port).to.eq('8080');
      expect(location.protocol).to.eq('http:');
    })
  })
  