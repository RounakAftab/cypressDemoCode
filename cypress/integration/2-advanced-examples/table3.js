///<reference types="cypress" />

describe('new tab open', function(){

    it('tab not gonna open', function(){
    
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    
    //table data
    cy.get('tr td:nth-child(2)').each(($el, index, $list) => {


        const text= $el.text()
        if(text.includes("Python")){

            cy.get($el).next().should('have.text', '25')

        }

    }) 
    
    
    })
    
    
    })