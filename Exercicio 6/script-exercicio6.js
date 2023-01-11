function getValor(){
    const inputValue = document.querySelector(".valor").value
   
    setValue(inputValue)
}

function setValue(valor){
    const divMostrar = document.querySelector(".areaResultado")
    valor = Number(valor)
    let returnResultado = valor + (0.28 * valor) + (0.45 * valor)
    returnResultado = returnResultado + (0.45 * returnResultado) 
    const paragrafo = document.createElement('div').innerHTML = returnResultado
    divMostrar.append(paragrafo)
}
