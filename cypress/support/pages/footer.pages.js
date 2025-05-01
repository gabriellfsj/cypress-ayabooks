const ELEMENTS = require('../elements/estante.elements').ELEMENTS

class footer {

    selectLinkAyaAppsFooter(){
        cy.get(ELEMENTS.linkAyaAppsFooter)
        .click()    
    }

    selectBotaoInstagramFooter(){
        cy.get(ELEMENTS.botaoInstagramFooter)
        .scrollIntoView()
        .invoke('removeAttr', 'target')
        .click()  
        
        cy.origin('https://www.instagram.com', () => {
            cy.url().should('include', '/ayabooks.app/#'); 
        });

    }

    selectBotaoPlayStoreFooter(){
        cy.get(ELEMENTS.botaoPlayStoreFooter)
        .scrollIntoView()
        .invoke('removeAttr', 'target')
        .click()    

        cy.origin('https://play.google.com', () => {
            cy.url().should('include', 'store/apps/details?id=br.com.ayabooks'); // por exemplo
        });
    }

    selectBotaoAppleStoreFooter(){
        cy.get(ELEMENTS.botaoAppleStoreFooter)
        .scrollIntoView()
        .invoke('removeAttr', 'target')
        .click()  
        
        cy.origin('https://apps.apple.com', () => {
            cy.url().should('include', '/br/app/aya-books-audiolivros-livros/id1501381849?l=pt&ls=1'); // por exemplo
        });

    }

    selectBotaoQuemSomosFooter(){
        cy.get(ELEMENTS.botaoQuemSomosFooter)
        .click()    
    }

    selectBotaoAjudaFooter(){
        cy.get(ELEMENTS.botaoAjudaFooter)
        .click()    
    }
    
    selectBotaoTermoDeUsoFooter(){
        cy.get(ELEMENTS.botaoTermoDeUsoFooter)
        .click()    
    }

    selectBotaoPrivacidadeFooter(){
        cy.get(ELEMENTS.botaoPrivacidadeFooter)
        .click()    
    }
}

export default new footer();
