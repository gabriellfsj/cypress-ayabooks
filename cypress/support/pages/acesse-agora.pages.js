const ELEMENTS = require('../elements/acesse-agora.elements').ELEMENTS

class acesseAgora {

    selectBotaoPlayStoreAcesseAgora(){
        cy.get(ELEMENTS.botaoPlayStoreAcesseAgora)
        .scrollIntoView()
        .invoke('removeAttr', 'target')
        .click()    

        cy.origin('https://play.google.com', () => {
            cy.url().should('include', 'store/apps/details?id=br.com.ayabooks'); 
        });
    }

    selectBotaoAppleStoreAcesseAgora(){
        cy.get(ELEMENTS.botaoAppleStoreAcesseAgora)
        .scrollIntoView()
        .invoke('removeAttr', 'target')
        .click()  
        
        cy.origin('https://apps.apple.com', () => {
            cy.url().should('include', '/br/app/aya-books-audiolivros-livros/id1501381849?l=pt&ls=1'); 
        });

    }

    
}

export default new acesseAgora();
