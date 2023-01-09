function getValor(){
    const inputvalue = document.querySelector('.valor').value
    mostrarResultado(inputvalue)
}

function mostrarResultado(valor){
    const divMostraResultado = document.querySelector(".areaResultado")

    const valorFinalPorcetagem = (Number(valor) * 70) / 100
    const valorFinal = Number(valor) + valorFinalPorcetagem
    console.log(valorFinal)

    divMostraResultado.innerHTML = `<p><h1>Valor com a Porcetagem</h1><br>${valorFinal}</p>`
}