///<reference types="cypress" />


describe('new tab open', function(){

    it('tab not gonna open', function(){
    
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    
   //cy.get('.mouse-hover-content').invoke('show')
   cy.contains('Top').click({force: true})
   cy.url().should('includes','top')
    
    
    })
        
    })
    
    
    