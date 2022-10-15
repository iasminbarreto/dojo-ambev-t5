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

Cypress.Commands.add('login', (email, senha) => {
    cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
    cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)
    cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo Iasmin')
})

Cypress.Commands.add('cadastro', (nome, email, senha, csenha) => {
    cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input'). type(nome)
    cy.get('[data-test="register-email"]').type(email)
    cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type(senha)
    cy.get('[data-test="register-password2"]').type(csenha)
    cy.get('[data-test="register-submit"]').click()
    cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo Iasmin')
    cy.get('[data-test="navbar-logout"]').click()

})

// Cypress.Commands.add('exclusao', () => {
//     cy.login('iasminvictoria@hotmail.com', 'colorado0411{enter}')
//     if (('[data-test="dashboard-createProfile"]').should('be.visble')) {
//         cy.get('[data-test="dashboard-createProfile"]').click()
//         cy.get('#mui-component-select-status').click()
//         cy.get('.MuiList-root').find('[data-test="status-1"]').click() //QA Júnior
//         cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type('Cypress, Fluxo de qualidade, automação, testes manuais e testes exploratórios') // conhecimentos -
//         cy.get('[data-test="profile-submit"]').click()
//         cy.get('[data-test="dashboard-deleteProfile"]').click()
//     } else {
//         cy.get('[data-test="dashboard-deleteProfile"]').click()
//     }

// })
