///<reference types="cypress" />

describe('alert Man', function(){

    it('do alert', function(){

cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

cy.get('tr td:nth-child(2)').each(($el, index, $list) =>{

    const lamit= $el.text()
    
    if(lamit==="WebSecurity Testing for Beginners-QA knowledge to next level"){
        cy.get($el).next().should('have.text', '25')

    }

})

})

})