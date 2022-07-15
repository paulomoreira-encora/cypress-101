export class LearningUtils{
    greaterThanZero(value){
        if (value < 0){
            return false
        } else {
            return true
        }
    }

    checkElementContainVisibility(elementLocator, elementContain){
        return cy.get(elementLocator).contains(elementContain).should('be.visible')
    }

    getElementContain(elementLocator, elementContain) {
        return cy.get(elementLocator).contains(elementContain)
    }

    urlShouldIncludes(content){
        return cy.url().should('includes', content)
    }
}
