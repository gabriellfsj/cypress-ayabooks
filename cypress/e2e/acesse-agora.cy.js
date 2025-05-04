import acesseAgora from "../support/pages/acesse-agora.pages.js"
import navBar from "../support/pages/barra-de-navegacao.pages.js"


describe('Teste regressivo do site Aya Books', () => {

    context('Validar página Acesse agora do site Aya Books', () => {
        beforeEach(() => {
            cy.visit('/')
            navBar.selectbotaoAcesseAgoraNavBar()

        })


        it('Clicar no botão download via App Store', () => {
            acesseAgora.selectBotaoAppleStoreAcesseAgora()


        })

        it('Clicar no botão download via Play Store', () => {
            acesseAgora.selectBotaoPlayStoreAcesseAgora()


        })



    })



})