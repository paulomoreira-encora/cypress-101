// <reference types="cypress" />

describe('Pricing route verification', () => {
    before('Accessing ramp up project home page', () => {
        cy.visit('localhost:3000')
    })

    it('Testing pricing route', () => {
        cy.get('[href="/pricing"]').should('be.visible').click()
        cy.get('h1').contains('Pricing')
    })
})