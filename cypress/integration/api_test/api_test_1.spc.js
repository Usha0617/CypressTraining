describe('All API tests', () => {

    Cypress.config('baseUrl', 'https://reqres.in/api')

    it('GET 1',() => {

        cy.request('GET', '/users?page=2')
            .then((response) => {
                expect(response).to.have.property('status',200)
                expect(response.status).to.equal(200)
                expect(response.body).not.to.be.null
                expect(response.body).to.have.property('page',2)
                expect(response.body.data).to.have.length(6)
            })
    })

    // it('GET 2', () => {

    //     cy.request('GET', 'https://reqres.in/api/users?page=2')
    //     cy.get('@user_list')
    //         .should((response) => {
    //             expect(response).to.have.property('status',200)
    //             expect(response.status).to.equal(200)
    //             expect(response.body).not.to.be.null
    //             expect(response.body).to.have.property('page',2)
    //             expect(response.body.data).to.have.length(6)
    //         })
    // })

    it('POST 1', () => {

        cy.request({
            'method' : 'POST',
            'url'   :  '/users',
            body: {
                "name" : "Usha",
                "job" : "IT"
            }
        })
        .then((response) => {
            expect(response).to.have.property('status',201)
            expect(response.status).to.equal(201)
            expect(response.body).not.to.be.null
    })
})


    it('PUT 1', () => {
        cy.request({
            'method'    : 'PUT',
            'url' : '/users/2',
            body : {
                "name"  : "Ashaa",
                "job"   : "IT"
            }
        })
        .then((response) => {
            expect(response).to.have.property('status', 200);
            expect(response.status).to.equal(200);
            expect(response.body).not.to.be.null;
        })
    })

    it('DELETE 1', () =>{

        cy.request({
            'method'    : 'DELETE',
            'url'   : '/users/2',
       })
       .then((response) => {
        expect(response).to.have.property('status', 204);
        expect(response.status).to.equal(204);
        expect(response.body).not.to.be.null;
    })

    })

})