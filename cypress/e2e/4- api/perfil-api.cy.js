/// <reference types="cypress" />

describe('Funcionalidade: Perfil via API', () => {
    beforeEach(() => {
        cy.token().as ('token')
    });
    it('[POST] - Deve fazer um cadastro de um perfil com sucesso', function () => {
        
        cy.request({
            method: 'POST',
            url: 'https://conexaoqa.herokuapp.com/api/profile',
            headers: { Cookie : this.token},
            body: {
    
                "email": "iasminvictoria@hotmail.com",
                "password": "colorado0411"
            }
        }).then ((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('jwt')
        })
        
    });
    
});