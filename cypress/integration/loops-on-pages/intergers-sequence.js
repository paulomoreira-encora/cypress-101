import {LoopsUtils} from "../../support/loops-Utils/loops-utils"

const loopsUtils = new LoopsUtils()

describe("Intergers sequence", () => {
    beforeEach("Accessing the page", () => {
        cy.visit("https://www.random.org/integers/")
    })

    it("Alo", () => {
        loopsUtils.intergersSequence(10)
    })
})