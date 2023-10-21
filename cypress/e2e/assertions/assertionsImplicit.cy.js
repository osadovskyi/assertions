describe('Implicit assertions', () => {
  it('How to perform implicit checks', () => {
    cy.visit('/commands/assertions')
    
    cy.get('.table.table-bordered.assertion-table tr')
    .eq(3)
    .should('have.attr', 'class')

    cy.get('.table.table-bordered.assertion-table tr')
    .eq(3)
    .should('have.class', 'success')

    // cy.get('.table.table-bordered.assertion-table tr').then( tableRaws => {
    //   console.log(tableRaws)
    //   for(let i = 0; i < tableRaws.length; i++){
    //     if(tableRaws[i].innerHTML.attr('class').includes('success')){
    //       cy.wrap(tableRaws[i]).should('have.class', 'success')
    //     }
    //   }
    // })
    
    cy.get('.table.table-bordered.assertion-table tr td').eq(3).should('have.text', "Column content");
    cy.get('.table.table-bordered.assertion-table tr td').eq(3).should('contain', "Column ");
    cy.get('.table.table-bordered.assertion-table tr td').eq(3).should('have.html', "Column content");
    cy.get('.table.table-bordered.assertion-table tr td').eq(3).should('include.text', "Column ");

    cy.get('.table.table-bordered.assertion-table tr td').eq(3).should('not.have.text', "123123");
    cy.get('.table.table-bordered.assertion-table tr td').eq(3).should('not.contain', "123132");
    cy.get('.table.table-bordered.assertion-table tr td').eq(3).should('not.have.html', "123123");
    cy.get('.table.table-bordered.assertion-table tr td').eq(3).should('not.include.text', "123123");

    cy.get('.table.table-bordered.assertion-table tr th')
    .eq(4)
    .invoke('text')
    .then(parseFloat)
    .should('be.greaterThan', 1);


    cy.visit('/commands/querying');
    cy.get('#inputName').type('Hello world!').should('have.value', 'Hello world!');
    cy.get('#inputName').clear().type('Hello world!').invoke('val').should('equal', 'Hello world!');

    cy.visit('/commands/traversal');
    cy.get('.traversal-disabled .btn.btn-default').first().should('be.disabled');
    cy.get('.traversal-disabled .btn.btn-default').last().should('exist').and('be.enabled');


    cy.visit('/commands/assertions')
    cy.get('.table.table-bordered.assertion-table tr td')
    .eq(4)
    .should('have.css', 'background-color')
    .and('eq', "rgb(223, 240, 216)")


    cy.visit('/commands/assertions')
    cy.get('.table.table-bordered.assertion-table tr td')
    .eq(4)
    .should('have.css', 'background-color', "rgb(223, 240, 216)")
    .and('be.visible');
    
    cy.get('#should a')
    .should('be.visible')
    .and('have.attr', 'href')
    .and('include', '/should');
  })
})