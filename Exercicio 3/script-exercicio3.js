const button = document.querySelector('button');
const inputSelect = document.querySelector('.selector')
const input = document.querySelector('.valor')

inputSelect.addEventListener('click', () => {
    if (inputSelect.value === "Real") {

        input.placeholder = "Dolar"
        conversorRealDolar(input.value)

    } else {
        input.placeholder = "Real"
        conversorRealDolar(input.value)
    }
})

function conversorRealDolar(valor) {

    valorConvertido = Number(valor) * 5.30
    mostrarResultado(valorConvertido)
}

function mostrarResultado(valorFinal) {

    button.addEventListener('click', () => {

        const div = document.querySelector('.areaResultado')
        if (inputSelect.value === "Real") {
            
            div.innerHTML = `<h1>Real > Dolar</h1><br><p>
            ${input.value} > ${valorFinal}</p´>`;

        } else {

            div.innerHTML = `<h1>Dolar > Real</h1><br><p>
            ${valorFinal} > ${input.value}</p´>`;

        }
    })
}