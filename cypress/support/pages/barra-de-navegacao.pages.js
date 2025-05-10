const ELEMENTS = require('../elements/barra-de-navegacao.elements').ELEMENTS

class estante {
    selectlogoAyaBooksNavBar(){
        cy.get(ELEMENTS.logoAyaBooksNavBar)
        .click({ force: true })
           
    }

    selectbotaoInicioNavBar(){
        cy.xpath(ELEMENTS.botaoInicioNavBar)
        .dblclick() 
         
    }

    selectbotaoEstanteNavBar(){
        cy.get(ELEMENTS.botaoEstanteNavBar)
        .click()    
    }

    selectbotaoAcervoNavBar(){
        cy.get(ELEMENTS.botaoAcervoNavBar)
        .click()    
    }

    selectbotaoAcesseAgoraNavBar(){
        cy.get(ELEMENTS.botaoAcesseAgoraNavBar)
        .click()    
    }

    pesquisaNavBar(texto){
        cy.get(ELEMENTS.campoDeBuscaNavBar)
        .type(texto)
        //.type('{enter}')
    }

    selectbotaoPesquisarNavBar(){
        cy.get(ELEMENTS.botaoPesquisarNavBar)
        .click()    
    }

    validarPesquisa(texto){
        cy.get(ELEMENTS.conteudoPesquisado)
        .should('contain', texto)
    }

    
}

export default new estante();
//export default new telaInicial();