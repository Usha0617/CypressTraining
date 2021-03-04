/// <reference types = "cypress-downloadfile" />

it('File upload Demo', function(){

    //cy.visit('https://filebin.net/')
    //cy.get('#fileField').attachFile('./photo.png')

    cy.visit('http://tinyupload.com')
    cy.get('[name="uploaded_file"]').attachFile('photo.png')

})

it('File download', function(){

    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')
})
