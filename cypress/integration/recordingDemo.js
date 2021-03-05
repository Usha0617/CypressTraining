
describe('Recorded tests', function(){

    it('My first recorded test', function(){
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://trytestingthis.netlify.app/');
        cy.get('.side').click();
        cy.get('.login').click();
        cy.get('#uname').click();
        cy.get('#uname').type('trst{backspace}{backspace}{backspace}es{backspace}{backspace}{backspace}{backspace}test');
        cy.get('#pwd').type('test');
        cy.get('[type="submit"]').click();
        cy.get('h4 > a').click();
        /* ==== End Cypress Studio ==== */
    })
})
