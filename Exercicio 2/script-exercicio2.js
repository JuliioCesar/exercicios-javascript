const button = document.querySelector("button");

button.addEventListener("click", () => {
    const NomeDoAluno = document.querySelector(".input-nome").value;
    const primeiraNota = document.querySelector(".input-nota1").value;
    const segundaNota = document.querySelector(".input-nota2").value;
    const terceiraNota = document.querySelector(".input-nota3").value;

    ReceberValoresEMostrar(NomeDoAluno, primeiraNota, segundaNota, terceiraNota);
});

function ReceberValoresEMostrar(nome, notaOne, notaTwo, notaTree) {
    const resultadoFinal =
        (Number(notaOne) + Number(notaTwo) + Number(notaTree)) / 3;
    if (resultadoFinal >= 6) {
        Aprovado(nome, resultadoFinal);
    } else if (resultadoFinal <= 5) {
        Reprovado(nome, resultadoFinal);
    }
}

function Aprovado(nome, resultado) {
    const divResutaldos = document.querySelector(".areaResultado");
    divResutaldos.innerHTML = `<h1>Resultado Final</h1><br><p>
  Nome do Aluno : ${nome}<br> Nota Final: ${resultado}
  <br><h2>Aprovado</h2></p>`;
}

function Reprovado(nome, resultado) {
    const divResutaldos = document.querySelector(".areaResultado");
    divResutaldos.innerHTML = `<h1>Resultado Final</h1><br><p>
  Nome do Aluno : ${nome}<br> Nota Final: ${resultado}
  <br><h2>Reprovado</h2></p>`;
}
