const ELEMENTS = require('../elements/footer.elements').ELEMENTS

class footer {

    selectEbookNovidadesEstante(texto){
        cy.contains(texto)
        .click()    
    }

    validarAberturaConteudo(){
        cy.contains('Sinopse')

    }

    
}

export default new footer();
