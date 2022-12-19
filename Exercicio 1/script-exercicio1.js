/* pegando o botão usando DOM para atribuir um evento de click */
const button = document.querySelector("button");

button.addEventListener("click", () => {
  /* 
  Area para pegas os valores dos inputs do HTML */
  const nome = document.querySelector(".input-nome").value;
  const SalarioFixo = document.querySelector(".input-valor").value;
  const ValorTotalVendas = document.querySelector(".input-valor-total").value;

  /* Levando as informações e iniciando a função dentro do evento de click do botão */
  CalculandoMostrandoResultado(nome, SalarioFixo, ValorTotalVendas);
});

function CalculandoMostrandoResultado(nome, salario, vendas) {
  /* Pegando a classe para adicionar os valores na pagina HTML */
  const MostrarResultado = document.querySelector(".areaResultado");

  /*  Calculando o valor de vendas mais a comissão que foi informada no exercicio */
  let Comissao = (vendas * 15) / 100;

  /* Somando a comissão com o salario.. ps: tiver que converter o valor do input que era tipo string para tipo numer para poder calcular, por que estava concatenando os valores e não somando  */
  let resultado = Comissao + Number(salario);

  /* Aqui eu passo as informações na tela usando template string pegando todos os valores da variaveis e passando usando o DOM do java script simples... */
  MostrarResultado.innerHTML = `<h1>Total Salario Fim Do Mês</h1><br><p>Nome: ${nome}
  <br><br>Salario:${" R$" + salario}<br><br>Vendas:${" R$" + vendas}<br><br>Total: ${" R$" + resultado}</p>`;
}
