import estante from "../support/pages/estante.pages.js"
import navBar from "../support/pages/barra-de-navegacao.pages.js"


describe('Teste regressivo do site Aya Books', () => {
  
  context('Validar Estante do site Aya Books', () => {
    beforeEach(() => {
        cy.visit('/')
        navBar.selectbotaoEstanteNavBar()

    })

    
    it('Clicar no conteúdo da trilha de novidades', () => {
        estante.selectEbookNovidadesEstante('Orgulho e preconceito')
        estante.validarAberturaConteudo()

    })
    
    it('Clicar no conteúdo da trilha de ficção', () => {
        estante.selectEbookNovidadesEstante('A garota no espelho')
        estante.validarAberturaConteudo()

    })

    it('Clicar no conteúdo da trilha de Jornada Pessoal', () => {
        estante.selectEbookNovidadesEstante('Lute. Supere. Reaja.')
        estante.validarAberturaConteudo()

    })
    
     
    

      

  })



})