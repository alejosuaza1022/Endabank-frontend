// describe('Verify that the user is approved', function(){
//     it('when activating a user the toggle behaves as expected, changed to activated and blue',()=>{
//         cy.visit('http://localhost:3000/log-in/')
//         cy.get('#email').type('juanpablo.perezleon@endava.com')
//         cy.get('#password').type('Jpperezl25.')
//         cy.get('#logIn_btn').click()
//         cy.get(':nth-child(4) > .flex').click()
//         cy.get('#approveToggle42').should('not.be.checked')
//         cy.get('#approveToggle42').click({ force: true })
//     });
// })