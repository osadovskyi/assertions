///<reference types="cypress"/>

it('Cypress commands for starting chain of quering elements', () => {
    cy.visit('/commands/querying');
    
    cy.get('#query-btn', {timeout: 2000}).should('contain', 'Button');

    cy.contains('bananas').should('have.class', 'third');
    cy.contains('li.third','bananas').should('have.class', 'third');
    cy.contains(/^o\w+/).should('have.class', 'second');
    cy.contains('BanAnas', {matchCase: false, timeout: 2000}).should('have.class', 'third');

    cy.root().should('contain', 'Button');

    cy.get('.query-form').within(()=>{
      cy.get('#inputEmail').should('have.attr', 'placeholder', "Email");
      cy.get('#inputPassword').should('have.attr', 'placeholder', "Password");

      //cy.get('#query-btn', {timeout: 2000}).should('contain', 'Button');
      cy.root().should('not.have.html', 'button');
    })
  })
  

  it('Cypress commands for continue chain of quering elements', () => {
    cy.visit('/commands/traversal');
    
    cy.get('.traversal-breadcrumb.breadcrumb')
    .children('.active')
    .should('contain', 'Data');

    cy.contains('span', '14').closest('div').should('contain', 'Friends');

    cy.contains('span', '14').closest('div').contains('li', 'Friends');

    cy.get('.traversal-list').children().eq(1).should('contain', 'siamese');
    cy.get('.traversal-list').children().eq(-2).should('contain', 'sphynx');

    cy.get('.traversal-nav.nav.nav-tabs').children().filter('.active').should('contain', 'About');
    cy.get('.traversal-nav.nav.nav-tabs').children().not('.active').should('not.contain', 'About');

    cy.get('.pagination.traversal-pagination').find('span').first().should('contain', '«');
    cy.get('.pagination.traversal-pagination').find('span').last().should('contain', '»');

    cy.contains('apples').next().should('have.class', 'second').and('contain', 'oranges');

    cy.get('.traversal-next-all').contains('apples').nextAll('li:not(.second)').should('contain', 'bananas');
    cy.get('.traversal-next-all').find('.second').nextAll().should('contain', 'grapes');

    cy.get('#fruits').nextUntil('#veggies').should('contain', 'oranges');

    cy.get('.traversal-disabled .btn.btn-default').not('[disabled]');

    cy.get('.traversal-mark')
    .should('contain', 'highlight')
    .parent()
    .should('contain', 'Morbi leo risus, porta ac consectetur ac, highlight vestibulum at eros.');

    cy.get('.traversal-cite')
    .should('contain', 'Source Title')
    .parents()
    .find('footer')
    .should('contain', 'Someone famous in Source Title');

    cy.get('.nav.nav-pills .active')
    .siblings()
    .should('have.length', '2')

  })