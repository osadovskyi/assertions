it('Cypress commands for continue chain of quering elements', () => {
    cy.visit('/commands/actions');
    
    cy.get('#email1')
    .type('qweqwe')
    .should('have.value', 'qweqwe')
    .clear()
    .type('S{leftArrow}E{leftArrow}T{rightArrow}{rightArrow}{rightArrow}T', {delay: 1})
    .should('have.value', 'TEST')
    .type('{selectAll}{backspace}')
    .should('have.value', '');

    cy.get('.action-disabled').type('qweqwe', {force: true})

    cy.get('.action-focus')
    .focus()
    .should('have.class', 'focus')
    .prev()
    .should('have.attr', 'style', 'color: orange;');

    cy.get('#fullName1')
    .focus()
    .blur()
    .should('have.class', 'error')
    .prev()
    .should('have.attr', 'style', 'color: red;');

    cy.get('.action-form')
    .siblings()
    .should('have.length', 0)

    cy.get('.action-form')
    .find('#couponCode1')
    .type('test Text')
    .closest('form')
    .submit()
    .siblings()
    .should('contain', 'Your form has been submitted!');

    cy.get('#action-canvas')
    // .click()
    // .click('topLeft')
    // .click('topRight')
    // .click('bottomLeft')
    // .click('bottomRight')
    .click(10, 10)
    .click(100, 100)

    cy.get('.btn-primary.btn-lg').click({ force:true });

    cy.get('span[data-toggle="popover"]').click({ multiple: true });

    cy.get('.action-checkboxes [value="checkbox1"]').check();
    cy.get('.action-checkboxes [value="checkbox1"]').check();

    cy.get('.form-control.action-select')
    .select('apples')
    .should('have.value', 'fr-apples')

    cy.get('#scrollable-vertical').scrollTo(0, 500)

    cy.get('.trigger-input-range')
    .invoke('val', 66)
    .trigger('change')
    .siblings('p')
    .should('contain', '66');
  })