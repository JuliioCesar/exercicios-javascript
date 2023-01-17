function getValor() {
    const inputNomeAluno = document.querySelector(".nome").value;
    const inputPrimeiraNota = document.querySelector('.nota1').value;
    const inputSegundaNota = document.querySelector('.nota2').value;
    const inputTerceiraNota = document.querySelector('.nota3').value;

    getNotaAluno(inputNomeAluno, inputPrimeiraNota, inputSegundaNota, inputTerceiraNota);
}

function getNotaAluno(nomeAluno, nota1, nota2, nota3) {
    const divMostraResultado = document.querySelector('.areaResultado')
    const media = (Number(nota1) + Number(nota2) + Number(nota3)) / 3
    if (media >= 7) {
        divMostraResultado.innerHTML = `<h1>Resultado</h1><br><p>O Aluno: ${nomeAluno} foi aprovado com a média: ${media}</p>`
    }else if(media >= 5 && media <= 6.9) {
        divMostraResultado.innerHTML = `<h1>Resultado</h1><br><p>O Aluno: ${nomeAluno} ficou em recuperação, ficou com a média: ${media}</p>`
    } else if(media <= 4.9) {
        divMostraResultado.innerHTML = `<h1>Resultado</h1><br><p>O Aluno: ${nomeAluno} foi reprovado com a média: ${media}</p>`
    }
}