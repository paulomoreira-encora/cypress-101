// <reference types="cypress" />

describe('Login route verification', () => {

    before('Acessing ramp up project home page', () => {
        cy.visit('localhost:3000')
    })
    
    it('Testing login route', () => {
        cy.get('#login').should('be.visible').click()
        cy.get('[type="text"]').should('be.visible')
        cy.get('[type="password"]').should('be.visible')
    })
})