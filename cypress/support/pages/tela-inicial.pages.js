const ELEMENTS = require('../elements/tela-inicial.elements').ELEMENTS

class telaInicial {

    selectbotaoBannerInicio(){
        cy.get(ELEMENTS.botaoBannerInicio)
        .click()    
    }

    esperarBannerAparecer(){
        cy.get(ELEMENTS.botaoBannerInicio)
        .should('be.visible')
    }

    selectbotaoBannerUmInicio(){
        cy.get(ELEMENTS.botaoBannerUmInicio)
        .click() 
    }

    selectbotaoBannerDoisInicio(){
        cy.get(ELEMENTS.botaoBannerDoisInicio)
        .click()    
    }

    selectbotaoBannerTresInicio(){
        cy.get(ELEMENTS.botaoBannerTresInicio)
        .click()    
    }

    selectbotaoBannerQuatroInicio(){
        cy.get(ELEMENTS.botaoBannerQuatroInicio)
        .click()    
    }

    selectbotaoAcesseAgoraInicio(){
        cy.get(ELEMENTS.botaoAcesseAgoraInicio)
        .scrollIntoView()
        .click()    
    }

    selectbotaoAppleStoreIncio(){
        cy.get(ELEMENTS.botaoAppleStoreIncio)
        .scrollIntoView()
        .invoke('removeAttr', 'target')
        .click()  
        
        cy.origin('https://apps.apple.com', () => {
            cy.url().should('include', '/br/app/aya-books-audiolivros-livros/id1501381849?l=pt&ls=1'); // por exemplo
        });

    }

    selectbotaoPlayStoreIncio(){
        cy.get(ELEMENTS.botaoPlayStoreIncio)
        .scrollIntoView()
        .invoke('removeAttr', 'target')
        .click()    

        cy.origin('https://play.google.com', () => {
            cy.url().should('include', 'store/apps/details?id=br.com.ayabooks'); // por exemplo
        });

        
    }

    selectBotaoChatBotInicio(){
        cy.get(ELEMENTS.botaoChatBotInicio)
        .click({force: true}) 
        .wait(3000) 
        
    }
    
}

export default new telaInicial();
//export default new telaInicial();