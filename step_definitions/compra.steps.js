const { I } = inject();

Given('adiciono alguns itens no carrinho', () => {
  I.click('#add-to-cart-sauce-labs-backpack');
  I.click('#add-to-cart-sauce-labs-bike-light');
});


Given('clico no carrinho para verificar os itens', () => {
  I.click('#shopping_cart_container');
});


Given('clico para realizar o checkout', () => {
  I.click('#checkout');
});

Given('preencho os dados com minhas informações', () => {
  I.fillField('#first-name', 'Marielle');
  I.fillField('#last-name', 'Meira');
  I.fillField('#postal-code', '88804400');
  I.click('#continue');
});

Given('verifico o valor final e finalizo a compra', () => {
  I.see('Total: $43.18');
  I.click('#finish');
});

Then('devo verificar a mensagem de que meu pedido foi realizado com sucesso', () => {
  I.see('THANK YOU FOR YOUR ORDER');
  I.seeElement('.pony_express');
});