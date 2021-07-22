const el = {
//------ Mapeamento
// --- TF
    tfUsuario: '[data-test=username]',
    tfSenha: '[data-test=password]',
    // --- Botões
    btLogin: '[data-test=login-button]',
    btMenu: '#react-burger-menu-btn',
    btLogout: '#logout_sidebar_link',
    btAddToCart: '[data-test=add-to-cart-sauce-labs-backpack]',
    btAddToCart1: '[data-test=add-to-cart-sauce-labs-fleece-jacket]',
    btRemove: '[data-test=remove-sauce-labs-backpack]',
    btFiltro: '[data-test=product_sort_container]',
    btVoltaPrincipal: '[data-test=back-to-products]',
    selecionarProduto: '#item_4_title_link > .inventory_item_name',
    selecionarProduto1: '#item_5_title_link > .inventory_item_name',
    btCarrinho: '.shopping_cart_link',
    btCheckOut: '[data-test=checkout]',
    btContinua: '[data-test=continue]',
    btFinish: '[data-test=finish]',
    btIconeCarrinho: '.shopping_cart_badge',
    btVoltaShopping: '[data-test=continue-shopping]',
    // --- URL
    urlLoginValido: '/inventory.html',
    urlProduto: '/inventory-item.html?id=4',
    urlProduto1: '/inventory-item.html?id=5',
    urlCheckOutComplete: '/checkout-complete.html',
    // --- TXT
    txtDados: '[data-test=error]',
    txtCombo: '[data-test=product_sort_container]',
    txtvalidarComboAZ: '#item_4_title_link > .inventory_item_name',
    txtvalidarComboZA: '#item_3_title_link > .inventory_item_name',
    txtvalidarComboLOHI: '#item_2_title_link > .inventory_item_name',
    txtvalidarComboHILO: '#item_5_title_link > .inventory_item_name',
    txtNome: '[data-test=firstName]',
    txtSobrenome: '[data-test=lastName]',
    txtCEP: '[data-test=postalCode]',
}

class Teste {
    // -------------- Preenche Dados Login
    // Usuário válido
    preencherUsuario() {
        cy.get(el.tfUsuario).type("standard_user");
        cy.get(el.tfSenha).type("secret_sauce");
    }
    // Senha Inválida
    preencherSenhaIncorreta() {
        cy.get(el.tfUsuario).type("standard_user");
        cy.get(el.tfSenha).type("qualquer coisa");
    }

    // Usuário inválido
    preencherUsuarioIncorreto() {
        cy.get(el.tfUsuario).type("qualquer");
        cy.get(el.tfSenha).type("secret_sauce");
    }
    // Usuário válido sem senha
    preencherUsuarioSemSenha() {
        cy.get(el.tfUsuario).type("qualquer");
    }
    // Usuário válido sem senha
    preencherSenhaSemUsuario() {
        cy.get(el.tfSenha).type("secret_sauce");
    }
    preencherUsuarioComProblema() {
        cy.get(el.tfUsuario).type("problem_user");
        cy.get(el.tfSenha).type("secret_sauce");
    }
    preencherCamposCheckOut() {
        cy.get(el.txtNome).type("Robso");
        cy.get(el.txtSobrenome).type("Silva");
        cy.get(el.txtCEP).type("88701000");
    }
    preencherCamposCheckOutSemCep() {
        cy.get(el.txtNome).type("Robso");
        cy.get(el.txtSobrenome).type("Silva");
    }
    preencherCamposCheckOutCepIncorreto() {
        cy.get(el.txtNome).type("Robso");
        cy.get(el.txtSobrenome).type("Silva");
        cy.get(el.txtCEP).type("cepincorreto");
    }
    preencherCamposCheckOutSemNome() {
        cy.get(el.txtSobrenome).type("Silva");
        cy.get(el.txtCEP).type("88715000");
    }
    preencherCamposCheckOutSemSobrenome() {
        cy.get(el.txtNome).type("Robso");
        cy.get(el.txtCEP).type("88715000");
    }

    // -------------- Valida Dados de Login
    // Valida login
    validarLogin() {
        cy.url().should('include', el.urlLoginValido)
    }
    validarMensagemErro (mensagem) {
    cy.get(el.txtDados).should('have.text', mensagem)
    }
    // Valida acesso produto
    validarProduto() {
        cy.url().should('include', el.urlProduto)
    }
    validarProduto1() {
        cy.url().should('include', el.urlProduto1)
    }
    validarAddToCart() {
        cy.get(el.btRemove).should('have.text', 'Remove')  //GAMBIARRA
        cy.get(el.btIconeCarrinho).should('be.visible')
    }
    validarRemove() {
        cy.get(el.btAddToCart).should('have.text', 'Add to cart')  //GAMBIARRA
        cy.get(el.btIconeCarrinho).should('not.exist')
    }
    validarRemove1() {
        cy.get(el.btAddToCart1).should('have.text', 'Add to cart')  //GAMBIARRA
        cy.get(el.btIconeCarrinho).should('not.exist')
    }
    validarRemoveCarrinho() {
        cy.get(el.btIconeCarrinho).should('not.exist')
    }
    validarComboAZ() {
        cy.get(el.txtvalidarComboAZ).should('have.text', 'Sauce Labs Backpack')
    }
    validarComboZA() {
        cy.get(el.txtvalidarComboZA).should('have.text', 'Test.allTheThings() T-Shirt (Red)')
    }
    validarComboLOHI() {
        cy.get(el.txtvalidarComboLOHI).should('have.text', 'Sauce Labs Onesie')
    }
    validarComboHILO() {
        cy.get(el.txtvalidarComboHILO).should('have.text', 'Sauce Labs Fleece Jacket')
    }
    validarCompraFinalizada() {
        cy.url().should('include', el.urlCheckOutComplete)
    }

    // -------------- Botões e campos
    clicarBotaoLogin() {
        cy.get(el.btLogin).click();
    }
    clicarBotaoFiltroAZ() {
        cy.get(el.btFiltro).select('az');
    }
    clicarBotaoFiltroZA() {
        cy.get(el.btFiltro).select('za');
    }
    clicarBotaoFiltroLOHI() {
        cy.get(el.btFiltro).select('lohi');
    }
    clicarBotaoFiltroHILO() {
        cy.get(el.btFiltro).select('hilo');
    }
    clicarCheckOut() {
        cy.get(el.btCheckOut).click();
    }
    clicarContinua() {
        cy.get(el.btContinua).click();
    }
    clicarFinish() {
        cy.get(el.btFinish).click();
    }
    logoutUsuario() {
        cy.get(el.btMenu).click();
        cy.get(el.btLogout).click();
    }
    addToCart() {
        cy.get(el.btAddToCart).click();
    }
    remove() {
        cy.get(el.btRemove).click();
    }
    
    
    // ---------------- Limpa campos
    limparCampos() {
        cy.get(el.tfUsuario).clear();
        cy.get(el.tfSenha).clear();
    }
    // -------------- Selecionar
    selecionarProduto() {
        cy.get(el.selecionarProduto).click()
    }
    //selecionarProduto1() {
    //    cy.get(el.selecionarProduto1).click()
    //}
    voltarPrincipal() {
        cy.get(el.btVoltaPrincipal).click()
    }
    voltarShopping() {
        cy.get(el.btVoltaShopping).click()
    }
    clicarBotaoCarrinho() {
        cy.get(el.btCarrinho).click()
    }
}
    export default new Teste( );