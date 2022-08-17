// <reference types="cypress" />

describe('Get started route verification', () => {
    
    before('Acessing ramp up project home page', () => {
        cy.visit('localhost:3000')
    })

    it('Testing get started route', () => {
        cy.get('#get-started')
        .should('be.visible')
        .click()

        cy.get('#main-text').should('be.visible')  

    })
})