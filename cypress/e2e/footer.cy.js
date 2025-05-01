import footer from "../support/pages/footer.pages.js"

describe('Teste regressivo do site Aya Books', () => {
  
  context('Validar footer do site Aya Books', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    
    it('Clicar no link Aya Apps do footer', () => {
        footer.selectLinkAyaAppsFooter()

    })    
     
    it('Clicar no botão Instagram do footer', () => {
        footer.selectBotaoInstagramFooter()
        
    })  

    it('Clicar no botão Plays Store do footer', () => {
        footer.selectBotaoPlayStoreFooter()
             
     }) 

    it('Clicar no botão Apple Store do footer', () => {
        footer.selectBotaoAppleStoreFooter()
             
    })  

    it('Clicar no botão Quem somos do footer', () => {
        footer.selectBotaoQuemSomosFooter()
             
     }) 

    it('Clicar no botão Ajuda do footer', () => {
        footer.selectBotaoAjudaFooter()
            
     }) 

    it('Clicar no botão Termos de uso do footer', () => {
        footer.selectBotaoTermoDeUsoFooter()
        
     
    }) 

    it('Clicar no botão Política de privacidade do footer', () => {
        footer.selectBotaoPrivacidadeFooter()
        
     
    }) 

      

  })



})