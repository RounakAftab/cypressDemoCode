///<reference types="cypress" />

describe('this is open tab concept',function(){

it('remove tab concept', function(){

//cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
//cy.get('#opentab').invoke('removeAttr','target').click()

cy.visit('http://the-internet.herokuapp.com/windows')
cy.contains('Click Here').invoke('removeAttr','target').click()
cy.url().should('includes','windows/new')
cy.wait(3000)
cy.go('back')





})




})