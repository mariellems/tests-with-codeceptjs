Feature: Login

  @LoginValido
  Scenario: Login com usuario e senha válidos
    Given digito um usuário válido
    And digito uma senha válida
    And clico no botão Login
    Then é possível logar no site 

  @LoginInvalido
  Scenario: Login com usuario inválido
    Given digito um usuário inválido
    And digito uma senha
    And clico no botão Login
    Then deve exibir mensagem com impedimento ao tentar realizar o login

  @UsuarioNaoInformado
  Scenario: Não informar um usuário
    Given não digito nenhum usuário
    And digito uma senha válida
    And clico no botão Login
    Then deve exibir mensagem informando que o usuário é obrigatório
