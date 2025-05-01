import navBar from "../support/pages/barra-de-navegacao.pages.js"

describe('Teste regressivo do site Aya Books', () => {
  
  context('Validar barra de nevegação do site Aya Books', () => {
    beforeEach(() => {
      cy.visit('/')
    })

   
    
    it('Clicar no botão Estante', () => {
      navBar.selectbotaoEstanteNavBar()

    })  

    
    it('Clicar no botão Acervo', () => {
      navBar.selectbotaoAcervoNavBar()

    })

       
     it('Clicar no botão Acesse Agora', () => {
      navBar.selectbotaoAcesseAgoraNavBar()
     
     }) 

     it('Realizar pesquisa de conteúdo', () => {
      navBar.pesquisaNavBar('Anne Frank')
      navBar.selectbotaoPesquisarNavBar()
      navBar.validarPesquisa('Anne Frank')

     })  

   

  })



})