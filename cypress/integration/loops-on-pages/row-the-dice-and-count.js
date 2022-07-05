import { LoopsUtils } from "../../support/loops-Utils/loops-utils";

const loopsUtils = new LoopsUtils()

describe('Row dice and count', () => {
    beforeEach('Accessing the row dice web page', () => {
        cy.visit('https://www.random.org/dice/')
    })

    it('Row dice and count', () => {
        loopsUtils.rollDice(10, 3, 2)
    })
})