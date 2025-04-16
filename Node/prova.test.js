const { Builder, By } = require('selenium-webdriver');
// Nessa estapa é inicializado o webdriver do selenium

(async function testeHanked() {
const url = 'https://www.hankeds.com.br/prova/login2.html';
let driver = await new Builder().forBrowser('chrome').build();
// Parametrização da URL e do navegador que serão utilizados nos teste

try {
// Try para inicialização dos testes

await driver.get(url);
await driver.sleep(2000);

const username = await driver.findElement(By.id('username'));
const password = await driver.findElement(By.id('password'));
const botao = await driver.findElement(By.xpath("//button[contains(text(),'Entrar')]"));
// Setar as variáveis de usuário e senha que serão inseridos no teste, além de criar a ação de acessar o botão após preencher as informações

for (const letra of 'admin') {
await username.sendKeys(letra);
await driver.sleep(250);
}
// Preenchimento das informações do usuário


await driver.sleep(1000);

for (const letra of 'admin123456') {
await password.sendKeys(letra);
await driver.sleep(250);
}
// Preenchimento das informações da senha

await driver.sleep(1000);
await botao.click();
// Cliando no botão

await driver.sleep(4000);

const urlAtual = await driver.getCurrentUrl();

if (urlAtual.includes('destino.html')) {
console.log('Teste passou: redirecionado corretamente.');
} else {
console.log('Teste falhou: não houve redirecionamento.');
}
// Verificação para o sucesso do teste caso ele tenha redestinado para a outra página

await driver.sleep(5000);

} catch (err) {
console.error(' Erro durante o teste:', err);
} finally {
await driver.quit();
}
// Exibição do erro
})();