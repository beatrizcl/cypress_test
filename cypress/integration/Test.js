/// <reference types="cypress" />
import Teste from '../support/pages/index'

// --------- Funcionalidade Login
describe('Funcionalidade Login', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Login com sucesso usuário', () => {
        // --- Caso de Teste 1: Login com sucesso usuário.
        Teste.limparCampos();
        Teste.preencherUsuario();
        Teste.clicarBotaoLogin();
        Teste.validarLogin();
        Teste.logoutUsuario();
    })

    it('Usuário existente com senha incorreta', () => {
        // --- Caso de Teste 2: Usuário existente com senha incorreta.
        Teste.limparCampos();
        Teste.preencherSenhaIncorreta();
        Teste.clicarBotaoLogin();
        Teste.validarMensagemErro('Epic sadface: Username and password do not match any user in this service');
        Teste.limparCampos();
    })

    it('Usuário não existente com senha.', () => {
        // --- Caso de Teste 3: Usuário não existente com senha.
        Teste.limparCampos();
        Teste.preencherUsuarioIncorreto();
        Teste.clicarBotaoLogin();
        Teste.validarMensagemErro('Epic sadface: Username and password do not match any user in this service');
        Teste.limparCampos();
    })

    it('Usuário existente sem senha.', () => {
        // --- Caso de Teste 4: Usuário existente sem senha.
        Teste.limparCampos();
        Teste.preencherUsuarioSemSenha();
        Teste.clicarBotaoLogin();
        Teste.validarMensagemErro('Epic sadface: Password is required');
        Teste.limparCampos();
    })

    it('Preenchimento sem usuário com senha.', () => {
        // --- Caso de Teste 5: Preenchimento sem usuário com senha.
        Teste.limparCampos();
        Teste.preencherSenhaSemUsuario();
        Teste.clicarBotaoLogin();
        Teste.validarMensagemErro('Epic sadface: Username is required');
        Teste.limparCampos();
    })

    it('Login em branco.', () => {
        // --- Caso de Teste 6: Login em branco. 
        Teste.limparCampos();
        Teste.clicarBotaoLogin();
        Teste.validarMensagemErro('Epic sadface: Username is required');
        Teste.limparCampos();
    })
})
// --------- Funcionalidade Produto
describe('Funcionalidade Produto', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    afterEach(() => {
        Teste.logoutUsuario();
    })
    it('Listar produtos - usuário comum', () => {
        // --- Caso de Teste 1: Listar produtos - usuário comum
        Teste.preencherUsuario();
        Teste.clicarBotaoLogin();
        Teste.validarLogin();
        Teste.clicarBotaoFiltroAZ();
        Teste.validarComboAZ();
        Teste.clicarBotaoFiltroZA();
        Teste.validarComboZA();
        Teste.clicarBotaoFiltroLOHI();
        Teste.validarComboLOHI();
        Teste.clicarBotaoFiltroHILO();
        Teste.validarComboHILO();
    })

    it('Listar produtos - usuário com problema', () => {
        // --- Caso de Teste 2: Listar produtos - usuário com problema.
        Teste.preencherUsuarioComProblema();
        Teste.clicarBotaoLogin();
        Teste.validarLogin();
        Teste.clicarBotaoFiltroAZ();
        Teste.validarComboAZ();
        Teste.clicarBotaoFiltroZA();
        Teste.validarComboZA();
        Teste.clicarBotaoFiltroLOHI();
        Teste.validarComboLOHI();
        Teste.clicarBotaoFiltroHILO();
        Teste.validarComboHILO();
    })

    it('Selecionar produto - Usuário padrão', () => {
        // --- Caso de Teste 3: Visualizar Produto - usuário comum
        Teste.preencherUsuario();
        Teste.clicarBotaoLogin();
        Teste.validarLogin();
        Teste.selecionarProduto();
        Teste.validarProduto();
        Teste.voltarPrincipal();
    })

    it('Selecionar produto - Usuário com Problema', () => {
        // --- Caso de Teste 4: Visualizar Produto - usuário com problema
        Teste.preencherUsuarioComProblema();
        Teste.clicarBotaoLogin();
        Teste.validarLogin();
        Teste.selecionarProduto();
        Teste.validarProduto1();
        Teste.voltarPrincipal();
    })

    it('Listar Produto - Filtro A - Z', () => {
        // --- Caso de Teste 4: Listar Produto - Filtro A - Z
        Teste.preencherUsuario();
        Teste.clicarBotaoLogin();
        Teste.validarLogin();
        Teste.clicarBotaoFiltroAZ();
        Teste.validarComboAZ();
    })

    it('Listar Produto - Filtro Z - A', () => {
        // --- Caso de Teste 5: Listar Produto - Filtro Z - A
        Teste.preencherUsuario();
        Teste.clicarBotaoLogin();
        Teste.validarLogin();
        Teste.clicarBotaoFiltroZA();
        Teste.validarComboZA();
    })

    it('Listar Produto - Filtro Menor Preço', () => {
        // --- Caso de Teste 6: Listar Produto - Filtro Menor Preço
        Teste.preencherUsuario();
        Teste.clicarBotaoLogin();
        Teste.validarLogin();
        Teste.clicarBotaoFiltroLOHI();
        Teste.validarComboLOHI();
    })

    it('Listar Produto - Filtro Maior Preço', () => {
        // --- Caso de Teste 7: Listar Produto - Filtro Maior Preço
        Teste.preencherUsuario();
        Teste.clicarBotaoLogin();
        Teste.validarLogin();
        Teste.clicarBotaoFiltroHILO();
        Teste.validarComboHILO();
    })
})
// --------- Funcionalidade Carrinho
describe('Funcionalidade Carrinho', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    afterEach(() => {
        Teste.logoutUsuario();
    })
    it('Adicionar produto no carrinho através da página de produtos - standard_user', () => {
        // --- Caso de Teste 1: Adicionar produto no carrinho através da página de produtos - standard_user
        Teste.preencherUsuario();
        Teste.clicarBotaoLogin();
        Teste.validarLogin();
        Teste.addToCart();
        Teste.validarAddToCart();
    })

    it('Adicionar produto no carrinho através da página de produtos- usuário com problema', () => {
        // --- Caso de Teste 2: Adicionar produto no carrinho através da página de produtos- usuário com problema
        Teste.preencherUsuarioComProblema();
        Teste.clicarBotaoLogin();
        Teste.validarLogin();
        Teste.addToCart();
        Teste.validarAddToCart();
    })

    it('Adicionar produto no carrinho através do detalhe do produto - standard_user', () => {
        // --- Caso de Teste 3: Adicionar produto no carrinho através do detalhe do produto - standard_user
        Teste.preencherUsuario();
        Teste.clicarBotaoLogin();
        Teste.validarLogin();
        Teste.selecionarProduto();
        Teste.validarProduto();
        Teste.addToCart();
        Teste.validarAddToCart();
    })

    it('Adicionar produto no carrinho através do detalhe do produto - usuário com problema.', () => {
        // --- Caso de Teste 4: Adicionar produto no carrinho através do detalhe do produto - usuário com problema.
        Teste.preencherUsuarioComProblema();
        Teste.clicarBotaoLogin();
        Teste.validarLogin();
        Teste.selecionarProduto();
        Teste.validarProduto1();
    })

    it('Remover produto na página carrinho', () => {
        // --- Caso de Teste 5: Remover produto na página carrinho
        Teste.preencherUsuario();
        Teste.clicarBotaoLogin();
        Teste.validarLogin();
        Teste.selecionarProduto();
        Teste.validarProduto();
        Teste.addToCart();
        Teste.validarAddToCart();
        Teste.clicarBotaoCarrinho();
        Teste.remove();
        Teste.validarRemoveCarrinho();

    })

    it('Remover produto no carrinho na tela de detalhe - standard_user', () => {
        // --- Caso de Teste 6: Remover produto no carrinho na tela de detalhe - standard_user
        Teste.preencherUsuario();
        Teste.clicarBotaoLogin();
        Teste.validarLogin();
        Teste.selecionarProduto();
        Teste.validarProduto();
        Teste.addToCart();
        Teste.validarAddToCart();
        Teste.clicarBotaoCarrinho();
        Teste.selecionarProduto();
        Teste.validarProduto();
        Teste.remove();
        Teste.validarRemove();

    })

    it('Remover produto no carrinho na tela de detalhe - problem_user - CORRIGIDO', () => {
        // --- Caso de Teste 7: Remover produto no carrinho na tela de detalhe - problem_user
        Teste.preencherUsuarioComProblema();
        Teste.clicarBotaoLogin();
        Teste.validarLogin();
        Teste.selecionarProduto();
        Teste.validarProduto1();
        Teste.validarRemove1();
    })

    it('Remover produto no carrinho na tela de produtos - standard_user', () => {
        // --- Caso de Teste 8: Remover produto no carrinho na tela de produtos - standard_user
        Teste.preencherUsuario();
        Teste.clicarBotaoLogin();
        Teste.validarLogin();
        Teste.selecionarProduto();
        Teste.validarProduto();
        Teste.addToCart();
        Teste.validarAddToCart();
        // ir para o carrinho
        Teste.remove();
        Teste.validarRemove();
    })

    it('Remover produto no carrinho na tela de produtos - problem_user.', () => {
        // --- Caso de Teste 9: Remover produto no carrinho na tela de produtos - problem_user.
        Teste.preencherUsuarioComProblema();
        Teste.clicarBotaoLogin();
        Teste.validarLogin();
        Teste.addToCart();
        Teste.validarAddToCart();
        //ir para o carrinho
        Teste.remove();
        Teste.validarAddToCart();
    })
})
// --------- Funcionalidade: CheckOut.
describe('Funcionalidade: CheckOut.', () => {
    beforeEach(() => {
        cy.visit('/')
        Teste.preencherUsuario();
        Teste.clicarBotaoLogin();
        Teste.validarLogin();
        Teste.addToCart();
        Teste.validarAddToCart();
        Teste.clicarBotaoCarrinho();
        Teste.clicarCheckOut();
    })
    afterEach(() => {
        Teste.logoutUsuario();
    })

    it('Check out com sucesso.', () => {
        // --- Caso de Teste 1: Check out com sucesso.
        Teste.preencherCamposCheckOut();
        Teste.clicarContinua();
        Teste.clicarFinish();
        Teste.validarCompraFinalizada();
       
    })

    it('Check out - Faltando o CEP.', () => {
        // --- Caso de Teste 2: Check out - Faltando o CEP.
        Teste.preencherCamposCheckOutSemCep();
        Teste.clicarContinua();
        Teste.validarMensagemErro('Error: Postal Code is required');
    })

    it('Check out - CEP não númerico.', () => {
        // --- Caso de Teste 3: Check out - CEP não númerico.
        Teste.preencherCamposCheckOutCepIncorreto();
        Teste.clicarContinua();
        Teste.clicarFinish();
        //Teste.validarMensagemErro('have.text','Error: Postal Code is required');
    })

    it('Check out - Faltando primeiro nome.', () => {
        // --- Caso de Teste 4: Check out - Faltando primeiro nome.
        Teste.preencherCamposCheckOutSemNome();
        Teste.clicarContinua();
        Teste.validarMensagemErro('Error: First Name is required');
    })

    it('Check out - Faltando último nome.', () => {
        // --- Caso de Teste 5: Check out - Faltando último nome.
        Teste.preencherCamposCheckOutSemSobrenome();
        Teste.clicarContinua();
        Teste.validarMensagemErro('Error: Last Name is required');
    })

    it('Check out - Campos em branco.', () => {
        // --- Caso de Teste 6: Check out - Campos em branco.
        Teste.clicarContinua();
        Teste.validarMensagemErro('Error: First Name is required');
    })
})