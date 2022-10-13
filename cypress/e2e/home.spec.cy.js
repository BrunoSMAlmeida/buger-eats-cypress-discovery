describe('home page', ()=>{
    it('App deve estar online', ()=>{ // Teste para saber se o site/app tá online
        cy.viewport(1440, 900) // Muda a resolução do site pra uma resolução mais condizente com a nossa tela
        cy.visit('https://buger-eats-qa.vercel.app') // Indica o caminho do site que vamos testar.
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats') // Faz uma verificação para saber se o site está online.
    })
})