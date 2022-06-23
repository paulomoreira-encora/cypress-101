describe('Get Bootstrap Testing', function(){
    it('Accessing Get Bootstrap', function(){
        cy.log('Accessing home')
        cy.visit('https://getbootstrap.com')
        cy.wait(3000)
    })
    it('Acessing the documentation', function(){
        cy.contains('Docs').click()
        cy.url().should('include', '/docs/')
        cy.wait(3000)
    })
    it('Search Browsers and devices', function(){
        cy.get('.DocSearch')
        .type('Browsers and devices')
        cy.wait(3000)
        cy.get('#docsearch-item-0').click()
        cy.url().should('include', '/browsers-devices/')
        cy.wait(2000)
    })
    it('Navigate to CSS variables', function(){
        cy.contains("CSS variables").click()
    })
    it('Acessing the Examples', function(){
        cy.contains('Examples').click()
        cy.url().should('include', '/examples/')
        cy.wait(3000)
    })
    it('Checking the Modals example', function(){
        cy.contains('Modals').click()
        cy.url().should('include', '/modals/')
        cy.wait(5000)
        cy.go('back')
        cy.scrollTo('top')
    })
    it('Acessing the documentation', function(){
        cy.contains('Docs').click()
        cy.url().should('include', '/docs/')
        cy.wait(3000)
    })
    it('Accessing Options documentation', function (){
        cy.contains('Options').click()
        cy.url().should('include', '/options/')
        cy.scrollTo('bottom')
        cy.wait(2000)
        cy.scrollTo('top')
        cy.wait(2000)
    })
    it('Printing Options table', function(){
        cy.log('Variable')
        cy.get('.table-options').get('td:nth-child(1)').each(($el, index, $list) => cy.log($el.text()))

        cy.log('Values')
        cy.get('.table-options').get('td:nth-child(2)').each(($el, index, $list) => cy.log($el.text()))

        cy.log('Description')
        cy.get('.table-options').get('td:nth-child(3)').each(($el, index, $list) => cy.log($el.text()))
    })
    it('Navigating back to home', function(){
        cy.get('.my-1').click()
        cy.url().should('eq', 'https://getbootstrap.com/')
    })
    it('Checking Bootstrap available versions', function(){
        cy.get('#bd-versions').click()
        cy.get('ul.dropdown-menu').children().each(($el,index, $list)=>{
            if($el.text().includes('All versions')){
                cy.get($el).click()
            }
        })
    })
})
