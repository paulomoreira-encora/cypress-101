import { LearningUtils } from "../../../support/learning-utils/learning-utils";
import { Learning01Utils } from "../../../support/learning-utils/learning01-utils";

const learningUtils = new LearningUtils();
const learning01Utils = new Learning01Utils()

describe('Verify items added to the cart on Kabum', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

    beforeEach('Accessing kabum home page', () => {
        cy.visit('https://www.kabum.com.br')
    })

    it('Verifying added items to the cart', () => {
        
        learning01Utils.openHardwareMenu()
        learning01Utils.searchCategory('Memória RAM', 'DDR 4')
        learning01Utils.ramMemorySpecifications('3200 MHz', '16 GB (2x 8GB)', 'Desktop')
        learning01Utils.sortBy('Preço crescente')
        learning01Utils.selectTheNProduct(1)
        learning01Utils.addToCart()
        learning01Utils.keepBuying()

        learning01Utils.openHardwareMenu()
        learning01Utils.searchCategory('Processadores', 'Processador AMD')
        learning01Utils.processorSpecifications('Gen 5000', 'Ryzen')
        learning01Utils.sortBy('Preço crescente')
        learning01Utils.selectTheNProduct(2)
        learning01Utils.addToCart()
        learning01Utils.keepBuying()

        learning01Utils.openHardwareMenu()
        cy.scrollTo(0, 500)
        cy.wait(1000) //Wait for screen scrooling
        learning01Utils.searchCategory('SSD', 'SSD PCIe NVMe')
        learning01Utils.ssdSpecifications('3500 MBs')
        learning01Utils.sortBy('Preço crescente')
        learning01Utils.selectTheNProduct(3)
        learning01Utils.addToCart()
        learning01Utils.keepBuying()

        learning01Utils.openHardwareMenu()
        learning01Utils.searchCategory('Placas-mãe', 'Placa-Mãe AMD')
        learning01Utils.moboSpecifications('AM4', 'B550', 'Micro ATX')
        learning01Utils.sortBy('Preço crescente')
        learning01Utils.selectTheNProduct(1)
        learning01Utils.addToCart()
        learning01Utils.keepBuying()

        learning01Utils.openCart()
        learning01Utils.checkIfCartIsEmpty()
    })
})