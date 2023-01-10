function getValor(){
    const inputValue = document.querySelector('.valor').value
    mostrarResultado(inputValue)
}

function mostrarResultado(valor){
    const divMostrarValor = document.querySelector('.areaResultado')
    const divParagrafo = document.createElement('p')
    var html = ``
    for (var i = 1; i < 6; i++){
        html += `<li>Parcelas ${[i]}x, ${valor / [i]}</li>`
    }
    divParagrafo.innerHTML = html
    divMostrarValor.appendChild(divParagrafo)
   
}