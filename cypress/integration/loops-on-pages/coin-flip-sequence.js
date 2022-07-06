import {LoopsUtils} from '../../support/loops-Utils/loops-utils'

const loopsUtils = new LoopsUtils()

describe('Coin Flip Sequence', () => {
    const loopLimit = 10
    const coinsNum = 5
    const coinCurrency = 'Brazilian 1 Real'

    beforeEach('Accessing the Coin Flip page', () => {
        cy.visit('https://www.random.org/coins/')
    })

    it('Seeking for a coin flip sequence', () => {
        loopsUtils.coinFlip(loopLimit, coinsNum, coinCurrency)
    })
})