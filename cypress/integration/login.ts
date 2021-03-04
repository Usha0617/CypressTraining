import { LoginPage } from '../Pages/login_page'

beforeEach(function(){
    cy.log('I am outside Describe block')
})

describe('All login Tests', function () {
    let loginpage = new LoginPage()

    beforeEach(function(){
        loginpage.navigate('https://trytestingthis.netlify.app/')
    })

    it('Login Test - Valid Credential', () => {
        loginpage.loginWithValidCredential('test', 'test')
    })

    it('Login Test - Invalid Credential', () => {
       loginpage.loginWithInvalidCredential('abc', '123')
    })

})

    // loginpage.enterusername('test')
    // loginpage.enterpassword('test')
    // loginpage.clicklogin()

    // cy.visit('https://trytestingthis.netlify.app/')
    // cy.get('#uname').type('test')
    // cy.get('#pwd').type('test')
    // cy.get('[type="submit"]').click()
    // cy.contains('Login Successful')