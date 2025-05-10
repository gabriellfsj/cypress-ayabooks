const ELEMENTS = require('../elements/acervo.elements').ELEMENTS

class acervo {

    selectfiltroAdministracaoBooks(){
        cy.get(ELEMENTS.filtroAdministracaoBooks)
        .click()    
    }

    selectfiltroArtesBooks(){
        cy.get(ELEMENTS.filtroArtesBooks)
        .click()    
    }

    selectfiltroAdministracaoMbooks(){
        cy.get(ELEMENTS.filtroAdministracaoMbooks)
        .click()    
    }

    selectfiltroArtesMbooks(){
        cy.get(ELEMENTS.filtroArtesMbooks)
        .click()    
    }

    selectfiltroAdministracaoAbooks(){
        cy.xpath(ELEMENTS.filtroAdministracaoAbooks)
        .click()
         
    }

    selectfiltroArtesAbooks(){
        cy.xpath(ELEMENTS.filtroArtesAbooks)
        .scrollIntoView()
        .click()    
    }

  

    selectfiltroAdministracaoBiblioBooks(){
        cy.xpath(ELEMENTS.filtroAdministracaoBiblioBooks)
        .scrollIntoView()
        .click()    
    }

    selectfiltroArtesBiblioBooks(){
        cy.xpath(ELEMENTS.filtroArtesBiblioBooks)
        .scrollIntoView()
        .click()    
    }

    selectfiltroAdministracaoBiblioAbooks(){
        cy.xpath(ELEMENTS.filtroAdministracaoBiblioAbooks)
        .scrollIntoView()
        .click()    
    }

    selectfiltroArtesBiblioAbooks(){
        cy.xpath(ELEMENTS.filtroArtesBiblioAbooks)
        .scrollIntoView()
        .click()    
    }

    validarSecaoAposFiltro(texto){
        cy.get(ELEMENTS.secaoAposFiltro)
        .contains(texto)
            
    }

    

    
}

export default new acervo();
