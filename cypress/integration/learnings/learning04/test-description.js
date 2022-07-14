import { LearningUtils } from "../../../support/learning-utils/learning-utils";
import { Learning04Utils } from "../../../support/learning-utils/learning04-utils";
import { memberSignUpInfoObject } from "../../../objects/learning04/member-sign-up-info-object";

const learningUtils = new LearningUtils();
const learning04Utils = new Learning04Utils();
const signUpInfo = memberSignUpInfoObject;

describe('Create a new account and verify the login', () => {

    beforeEach('Accessing the login page', () => {
        cy.visit('http://automationpractice.com/index.php')
    })

    it('Sign up and login test', () => {
        learningUtils.getElementContain('.login', 'Sign in').click()
        learningUtils.urlShouldIncludes('controller=authentication')

        cy.get('#email_create').type('teste94@gmail.com')
        learningUtils.getElementContain('.btn.btn-default', 'Create an account').click()
        learningUtils.urlShouldIncludes('account-creation')

        cy.get('body').then(() => {learning04Utils.fillSignUpFields(signUpInfo)})

        cy.get('.logout').click()
        learningUtils.urlShouldIncludes('controller=authentication')

        cy.get('body').then(() => {learning04Utils.fillSignInFields(signUpInfo)})
        learningUtils.urlShouldIncludes('controller=my-account')
    })
})