///<reference types="cypress" />
///<reference types="cypress-iframe" />
import 'cypress-iframe'

describe('this is open iframe concept',function(){


    it('iframe concept', function(){


cy.visit('https://rahulshettyacademy.com/AutomationPractice')
cy.frameLoaded('#courses-iframe')
cy.iframe().contains('Mentorship').click()


    })





})