// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('loginViaApi', (userEmail = 'markoqa13@gmail.com', userPass ='Marko123') => {
    cy.request({
        url: 'https://gallery-api.vivifyideas.com/api/auth/login',
        method: 'POST',
        body: {
            email: userEmail,
            password: userPass
        }
    }).its('body').then((odgovor) => {
        expect(odgovor.access_token).to.be.a('string');
        expect(odgovor.token_type).eq('bearer');
        window.localStorage.setItem('token', odgovor.access_token)
        cy.log(odgovor.access_token)
    })

})

// Cypress.Commands.add('registerUserViaApi', (firstName, lastName, email, pass, passConfirm, acceptTerms = true) => {
//     cy.request({
//         method: "POST",
//         url:  'https://gallery-api.vivifyideas.com/api/auth/register',
//         body:{"first_name": firstName,
//         "last_name": lastName,
//         "email": email,
//         "password": pass,
//         "password_confirmation": passConfirm,
//         "terms_and_conditions": acceptTerms}
//     }).its('body').then((response) => {
//         cy.log(response);
//         const token = response.access_token;
//         expect(token).to.be.a('string');
//         const userId = response.user_id;
//         expect(userId).to.be.a('number');

//         // window.localStorage.setItem('token',token);
//         // window.localStorage.setItem('user_id',userId);
//         cy.log(token);
//         cy.log(userId);
//     })
// })


Cypress.Commands.add('CreateViaApi', () => {
    const token = window.localStorage.getItem('token')
    cy.log({...window.localStorage})
    cy.request ({
        url : 'https://gallery-api.vivifyideas.com/api/galleries',
        method :'POST',
        headers: {
            Authorization : "Bearer "+ token
        },
        body:{
            "title":"xxxx",
            "description":"xxxx",
            "images":["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/June_odd-eyed-cat.jpg/737px-June_odd-eyed-cat.jpg"]
        }
    }).its('body').then((response) => {
       console.log(response);
       expect(response.id).to.exist;
       expect(response.id).to.be.a('number');

        
    })
})
