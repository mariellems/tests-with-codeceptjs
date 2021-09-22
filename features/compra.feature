Feature: Realizar compra

    Background:
    Given digito um usuário válido
    And digito uma senha válida
    And clico no botão Login
    Then é possível logar no site 

    @RealizarCompra
    Scenario: Realizar compra de itens na loja
        Given adiciono alguns itens no carrinho
        And clico no carrinho para verificar os itens
        And clico para realizar o checkout
        And preencho os dados com minhas informações
        And verifico o valor final e finalizo a compra
        Then devo verificar a mensagem de que meu pedido foi realizado com sucesso
