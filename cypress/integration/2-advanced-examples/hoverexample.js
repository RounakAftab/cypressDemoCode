///<reference types="cypress" />

describe('hover example', function(){


    it.only('excercise', function(){
        
        cy.visit('http://the-internet.herokuapp.com/hovers')
        cy.contains('Hovers').click()
        
        cy.get('.figcaption').invoke('show').eq(1).contains('View profile').click({force: true})
        //cy.contains('View profile').click({force: true})
        cy.url().should('includes','/2')
    })

})
