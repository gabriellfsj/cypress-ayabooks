import telaInicial from "../support/pages/tela-inicial.pages.js"

describe('Teste regressivo do site Aya Books', () => {
  
  context('Validar tela de início do site Aya Books', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('Clicar no banner da tela de início', () => {
        telaInicial.selectbotaoBannerInicio()

    })    
     
    it('Clicar no botão um do banner carrossel', () => {
        telaInicial.esperarBannerAparecer()
        telaInicial.selectbotaoBannerDoisInicio()
        telaInicial.selectbotaoBannerUmInicio()
        telaInicial.selectbotaoBannerInicio()

    })  

    it('Clicar no botão dois do banner carrossel', () => {
        telaInicial.esperarBannerAparecer()
        telaInicial.selectbotaoBannerDoisInicio()
        telaInicial.selectbotaoBannerInicio()
     
     }) 

    it('Clicar no botão três do banner carrossel', () => {
        telaInicial.esperarBannerAparecer()
        telaInicial.selectbotaoBannerTresInicio()
        telaInicial.selectbotaoBannerInicio()
     
     }) 

    it('Clicar no botão quatro do banner carrossel', () => {
        telaInicial.esperarBannerAparecer()
        telaInicial.selectbotaoBannerQuatroInicio()
        telaInicial.selectbotaoBannerInicio()
     
     }) 

     it('Clicar no botão Acesse Agora da tela de início', () => {
        telaInicial.selectbotaoAcesseAgoraInicio()
        
     
     }) 

     it('Clicar no botão Apple Store da tela de início', () => {
        telaInicial.selectbotaoAppleStoreIncio()
        
     
     }) 

     it('Clicar no botão Play Store da tela de início', () => {
        telaInicial.selectbotaoPlayStoreIncio()
        
     
     }) 

     it('Clicar no botão Chatbot  da tela de início', () => {
      telaInicial.selectBotaoChatBotInicio()

    })   

    

  })



})