/// <reference types="cypress" />

describe('Funcionalidade: Login via API', () => {
    it('[POST] - Deve fazer login numa conta já cadastrada', () => {
        
        cy.request({
            method: 'POST',
            url: 'https://conexaoqa.herokuapp.com/api/auth',
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