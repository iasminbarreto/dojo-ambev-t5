/// <reference types="cypress" />
import usuario from '../../fixtures/usuario.json'
describe ('US: Tela de login', ()=> {

    beforeEach(() => {
        cy.visit('login')
    });

    afterEach(() => {
        cy.screenshot()
    });

    /*
    Hoocks (ganchos)
    before (antes de todos os cenários)
    beforeEach (antes de cada cenário)
    after
    afterEach ( depois de cada cenário ex: um print)
    */

    it ('Login com sucesso: usuário e senha válidos - usando massa Fixture', () => {
        cy.fixture("usuario").then((user) => {
            cy.login(user.email, user.senha)
        })
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo Iasmin')
    });
    it('Login com sucesso: usuário e senha válidos - usando comando customizando', () => {
        cy.login('iasminvictoria@hotmail.com', 'colorado0411{enter}')
        // cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('iasminvictoria@hotmail.com')
        // cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('iasmin0411{enter}')
        // validação
        cy.get('[data-test="dashboard-welcome"]').should('be.visible')
        //cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo Iasmin')
    });
    it ('Login com sucesso: usuário e senha válidos - usando massa importada', () => {

        cy.login(usuario.email, usuario.senha)
        cy.get('[data-test="dashboard-welcome"]').should('be.visible')
        })

    it('Falha de login: usuário válido e senha inválida', () => {
        
        cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('iasminvictoria@hotmail.com')
        cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('iasmin044411{enter}')
        // validação
        cy.get('[data-test="alert"]').should('be.visible')

    });

    it('Falha de login: usuário inválido e senha válida', () => {
        
        cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('iasminnnvictoria@hotmail.com')
        cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('iasmin0411{enter}')
        // validação
        cy.get('[data-test="alert"]').should('be.visible')
    });

    it('Falha de login: usuário e senha inválidos', () => {
        
        cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('iasminnnvictoria@hotmail.com')
        cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('iasmin000411{enter}')
        // validação
        cy.get('[data-test="alert"]').should('be.visible')
    });


});