const { I } = inject();

Given('digito um usuário válido', () => {
  I.amOnPage('/')
  I.fillField('#user-name', 'standard_user');
});

Given('digito um usuário inválido', () => {
  I.amOnPage('/')
  I.fillField('#user-name', 'standard');
});

Given('não digito nenhum usuário', () => {
  I.amOnPage('/')
});

Given('digito uma senha válida', () => {
  I.fillField('#password', 'secret_sauce');
});

Given('digito uma senha', () => {
  I.fillField('#password', 'secret');
});

Given('clico no botão Login', () => {
  I.click('#login-button')
});

Then('é possível logar no site', () => {
  I.seeElement('.app_logo');
});

Then('deve exibir mensagem com impedimento ao tentar realizar o login', () => {
  I.see('Epic sadface: Username and password do not match any user in this service');
});

Then('deve exibir mensagem informando que o usuário é obrigatório', () => {
  I.see('Epic sadface: Username is required');
});

