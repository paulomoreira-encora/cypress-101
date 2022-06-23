// table-content.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
before('Acessing Options documentation', function(){
    cy.visit('https://getbootstrap.com/docs/5.2/customize/options/')
})

it('Printing Options table', function(){
    cy.log('Variable')
    cy.get('.table-options').get('td:nth-child(1)').each(($el, index, $list) => cy.log($el.text()))

    cy.log('Values')
    cy.get('.table-options').get('td:nth-child(2)').each(($el, index, $list) => cy.log($el.text()))

    cy.log('Description')
    cy.get('.table-options').get('td:nth-child(3)').each(($el, index, $list) => cy.log($el.text()))
})