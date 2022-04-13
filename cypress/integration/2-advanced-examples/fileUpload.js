///<reference types="cypress" />

describe('file upload', function(){

it('first try for file upload',function(){

cy.visit('https://practice.automationbro.com/cart/')

//upload file in the input field
cy.get('.file_input_hidden').attachFile('download.jpg')

//upload file
cy.get('#upload_1').click({force: true})
cy.wait(3000)

//Verify

cy.get('#wfu_messageblock_header_1_label_1').should('contain','uploaded successfully')


})

//For excercise
it.only('excercise File upload', function(){

cy.visit('http://the-internet.herokuapp.com/upload')
cy.get('#file-upload').attachFile('download.jpg')
cy.get('#file-submit').click()
cy.get('h3').should('contain','File Uploaded!')


 
})




})