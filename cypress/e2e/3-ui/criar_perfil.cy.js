/// <reference types="cypress" />
import criarPerfil from "../../support/criarPerfil"
describe('Criar perfil', () => {

    before(() => {
        cy.visit('cadastrar')
        cy.cadastro('Iasmin', 'iasminvictoria@hotmail.com', 'colorado0411', 'colorado0411')

    });

    beforeEach(() => {
        cy.visit('login')
        cy.login('iasminvictoria@hotmail.com', 'colorado0411{enter}')
    });

// NÃO PRECISA APAGAR A CONTA, APENAS SAIR 

it('Não preencher campos', () => {
    cy.get('[data-test="dashboard-createProfile"]').click()  //botão criar perfil 
    cy.get('[data-test="profile-submit"]').click()
    cy.get('.MuiFormHelperText-root').should('contain', 'Conhecimentos é obrigatório')
    // cy.matchImageSnapshot('status inválido') //validação // npm install --save-dev cypress-image-snapshot
    cy.get('[data-test="navbar-logout"]').click() // SAIR

});

it('Preencher somente campos obrigatórios: caracteres inválidos', () => {
    cy.get('[data-test="dashboard-createProfile"]').click()  //botão criar perfil 
    cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type('00000000000         00000000000000') // conhecimentos -
    criarPerfil.subCriarPerfil()
    cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').clear() // conhecimentos -
    criarPerfil.subCriarPerfil()
    cy.get('.MuiFormHelperText-root').should('contain', 'Conhecimentos é obrigatório')
    // cy.matchImageSnapshot('status inválido') //validação // npm install --save-dev cypress-image-snapshot
    cy.get('[data-test="navbar-logout"]').click() // SAIR
});

it ('Prencher campos apenas com espaços', () => {
    cy.get('[data-test="dashboard-createProfile"]').click()  //botão criar perfil 
    cy.get('#mui-component-select-status') //status -
    criarPerfil.preencherComEspacos()
    criarPerfil.subCriarPerfil()
    cy.get('.MuiFormHelperText-root').should('contain', 'Digite uma url válida')
    cy.get('[data-test="navbar-logout"]').click() // SAIR
});

it('Prencher campos com números', () => {
    cy.get('[data-test="dashboard-createProfile"]').click()  //botão criar perfil 
    cy.get('#mui-component-select-status') //status -
    cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type('1684135') //empresa
    cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type('56435466')//website
    cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type('4645645') //localização
    cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type('45645364') // conhecimentos -
    cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type('546456') // usuário GitHub
    cy.get('[rows="1"]').type('64564565') //biografia
    criarPerfil.subCriarPerfil()
    cy.get('.MuiFormHelperText-root').should('contain', 'Digite uma url válida')
    cy.get('[data-test="navbar-logout"]').click() // SAIR
});

    // PRECISA APAGAR CONTA 

    it('Preencher somente campos obrigatórios: caracteres válidos', () => {
        cy.get('[data-test="dashboard-createProfile"]').click()  //botão criar perfil 
        cy.get('#mui-component-select-status').click()
        cy.get('.MuiList-root').find('[data-test="status-1"]').click() //QA Júnior
        cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type('Cypress, Fluxo de qualidade, automação, testes manuais e testes exploratórios') // conhecimentos -
        cy.get('[data-test="profile-submit"]').click()
        cy.get('[data-test="dashboard-editProfile"]').should('contain', 'Editar Perfil') //validação
        criarPerfil.validaçãoExclusao()

    });


    it.skip('Preencher todos os campos: caracteres válidos', () => {
        criarPerfil.cadastramentoValido()
        cy.get('[data-test="dashboard-createProfile"]').click()  //botão criar perfil 
        criarPerfil.preencherTudoValido();
        // cy.get('#mui-component-select-status').click()
        // cy.get('.MuiList-root').find('[data-test="status-4"]').click() //QA Sênior
        // cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type('Cerveja Quente') //empresa
        // cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type('https://www.youtube.com/watch?v=EmI2Ey3RpkE') //website
        // cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type('Aracaju/SE') //localização
        // cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type('automação') // conhecimentos -
        // cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type('ihhh04') // usuário GitHub
        // cy.get('[rows="1"]').type('QA') //biografia
        criarPerfil.subCriarPerfil()
        // cy.get('[data-test="profile-submit"]').click()
        criarPerfil.validaçãoExclusao()
    });

    

});