/// <reference types="cypress" />
const faker = require('faker-br')
describe ('US: Tela de cadastro', ()=> {

    beforeEach(() => {
        cy.visit('cadastrar')
    });

it('Cadastro com sucessos', () => {
    let nome = faker.name.findName()
    let email = faker.internet.email(nome)
    cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(nome)
    cy.get('[data-test="register-email"]').type(email)
    cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('CalcinhaPreta')
    cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('CalcinhaPreta{enter}')

    cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo ' + nome)

});


});