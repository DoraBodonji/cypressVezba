class CommonElements {

    get emailInputFieldLogin() {
        return cy.get('#email')
    }
    get passwordInputFieldLogin() {
        return cy.get('#password')
    }
    get submitBtnLoginPage() {
        return cy.get('[type="submit"]')
    }

    loginUserFE(email, password) {
        cy.visit('login');
        this.emailInputFieldLogin.type(email);
        this.passwordInputFieldLogin.type(password);
        this.submitBtnLoginPage.click()
    }

    get ErrorAlert(){
        return cy.get('p[class = "alert alert-danger"')
    }

    get loginBtn(){
        return cy.get(".ml-auto > :nth-child(3) > .nav-link")
    }

}

export const commonElements = new CommonElements()