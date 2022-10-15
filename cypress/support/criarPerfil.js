
class criarPerfil {
    preencherComEspacos(){
        cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type('   ') //empresa
        cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type('   ')//website
        cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type('   ') //localização
        cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type('   ') // conhecimentos -
        cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type('   ') // usuário GitHub
        cy.get('[rows="1"]').type('   ') //biografia
    }
    preencherTudoValido(){
        cy.get('#mui-component-select-status').click()
        cy.get('.MuiList-root').find('[data-test="status-4"]').click() //QA Sênior
    
        // preencher 
        cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type('Cerveja Quente') //empresa
        cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type('https://www.youtube.com/watch?v=EmI2Ey3RpkE') //website
        cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type('Aracaju/SE') //localização
        cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type('automação') // conhecimentos -
        cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type('ihhh04') // usuário GitHub
        cy.get('[rows="1"]').type('QA') //biografia
    }
    subCriarPerfil(){
        cy.get('[data-test="profile-submit"]').click()
    }
    limparTudo(){
        // clear
        cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').clear()
        cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').clear()
        cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').clear()
        cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').clear()
        cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').clear()
    }
    validaçãoExclusao(){
        cy.get('[data-test="dashboard-deleteProfile"]').click() //validação de criação e exclusão
    }
    cadastramentoValido(){
        cy.visit('cadastrar')
        cy.cadastro('Iasmin', 'iasminvictoria@hotmail.com', 'colorado0411', 'colorado0411')
    }

}
export default new criarPerfil();