import acervo from "../support/pages/acervo.pages.js"
import navBar from "../support/pages/barra-de-navegacao.pages.js"


describe('Teste regressivo do site Aya Books', () => {

    context('Validar página Acesse agora do site Aya Books', () => {
        beforeEach(() => {
            cy.visit('/')
            navBar.selectbotaoAcervoNavBar()

        })


        it('Clicar filtro Administrção da seção Ebooks', () => {
            acervo.selectfiltroAdministracaoBooks()
            acervo.validarSecaoAposFiltro('Administração')

        })

        it('Clicar filtro Artes da seção Ebooks', () => {
            acervo.selectfiltroArtesBooks()
            acervo.validarSecaoAposFiltro('Artes')

        })

        it('Clicar filtro Administrção da seção Minibooks', () => {
            acervo.selectfiltroAdministracaoMbooks()
            acervo.validarSecaoAposFiltro('Administração')

        })

        it('Clicar filtro Artes da seção Minibooks', () => {
            acervo.selectfiltroArtesMbooks()
            acervo.validarSecaoAposFiltro('Artes')

        })

        it('Clicar filtro Administrção da seção Audiobooks', () => {
            acervo.selectfiltroAdministracaoAbooks()
            acervo.validarSecaoAposFiltro('Administração')

        })

        it('Clicar filtro Artes da seção Audiobook', () => {
            acervo.selectfiltroArtesAbooks()
            acervo.validarSecaoAposFiltro('Artes')

        })

        it('Clicar filtro Administrção da seção Audiobooks', () => {
            acervo.selectfiltroAdministracaoAbooks()
            acervo.validarSecaoAposFiltro('Administração')

        })

        it('Clicar filtro Artes da seção Audiobook', () => {
            acervo.selectfiltroArtesAbooks()
            acervo.validarSecaoAposFiltro('Artes')

        })

        it('Clicar filtro Administrção da seção Biblioteca Ebooks', () => {
            acervo.selectfiltroAdministracaoBiblioBooks()
            acervo.validarSecaoAposFiltro('Administração')

        })

        it('Clicar filtro Artes da seção Biblioteca Ebook', () => {
            acervo.selectfiltroArtesBiblioBooks()
            acervo.validarSecaoAposFiltro('Artes')

        })


        it('Clicar filtro Administrção da seção Biblioteca Audiobooks', () => {
            acervo.selectfiltroAdministracaoBiblioAbooks()
            acervo.validarSecaoAposFiltro('Administração')

        })

        it('Clicar filtro Artes da seção Biblioteca Audiobooks', () => {
            acervo.selectfiltroArtesBiblioAbooks()
            acervo.validarSecaoAposFiltro('Artes')

        }) 



    })



})