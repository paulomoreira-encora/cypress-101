export class LearningUTils{
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
}