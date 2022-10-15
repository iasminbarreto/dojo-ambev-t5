/// <reference types="cypress" />

describe('Funcionalidade: Cadastro via API', () => {

    it('[PUT] - Curte um post com o usuário informado no token do header.', () => {
     
        cy.request({
            method: 'PUT',
            url: 'api/users',
            body: {
                "name": "Fábio API",
                "email": email,
                "password": "teste@123"
              }
        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body).to.have.property('jwt')
            expect(response.duration).lessThan(500)
        })
    });


    
});