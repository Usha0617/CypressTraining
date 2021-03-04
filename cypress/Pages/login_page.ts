export class LoginPage {

    loginpage_username = '#uname'
    loginpage_password = '#pwd'
    loginpage_loginButton = '[type="submit"]'

    loginWithValidCredential(username: string, password: string){
        cy.get(this.loginpage_username).type(username)
        cy.get(this.loginpage_password).type(password)
        cy.get(this.loginpage_loginButton).click()
        cy.contains('Login Successful')
        cy.clickLink('here')
    }

    loginWithInvalidCredential(username: string, password: string){
        cy.get(this.loginpage_username).type(username)
        cy.get(this.loginpage_password).type(password)
        cy.get(this.loginpage_loginButton).click()
        //cy.contains('Login UnSuccessful')
        cy.on('window:alert', (txt) =>{
            expect(txt).to.be.equal('Wrong Credentials! Try again!')
        })
    }


    navigate(url: string) {
        cy.visit(url)

    }

    enterusername(username: string) {
        cy.get(this.loginpage_username).type(username)

    }

    enterpassword(password: string) {
        cy.get(this.loginpage_password).type(password)

    }
    clicklogin() {
        cy.get(this.loginpage_loginButton).click()
    }
}
