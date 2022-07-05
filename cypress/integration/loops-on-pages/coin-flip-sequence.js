import {LoopsUtils} from '../../support/loops-Utils/loops-utils'

const loopsUtils = new LoopsUtils()

describe('Coin Flip Sequence', () => {
    beforeEach('Accessing the Coin Flip page', () => {
        cy.visit('https://www.random.org/coins/')
    })

    it('Seeking for a coin flip sequence', () => {
        loopsUtils.coinFlip(5, 2, 'Brazilian 1 Real')
    })
})