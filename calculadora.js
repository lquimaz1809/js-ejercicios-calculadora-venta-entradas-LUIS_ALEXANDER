// Variables
const calculadora = document.getElementById('calculadora')
const resultado = document.getElementById('resultado')

// Operaciones almacenadas
let operaciones = []

// Evento principal
calculadora.addEventListener('click', añadirNumeros)

// Función para manejar los clics
function añadirNumeros(e) {
    if (e.target.getAttribute('type') === 'button') {
        let valor = e.target.innerText

        if (e.target.classList.contains('numero')) {
            resultado.value += valor
        }

        if (e.target.classList.contains('operacion')) {
            if (resultado.value !== '') {
                operaciones.push(resultado.value)
                operaciones.push(valor)
                resultado.value = ''
            }
        }

        if (e.target.id === 'igual') {
            if (resultado.value !== '') {
                operaciones.push(resultado.value)
            }

            let expresion = operaciones.join(' ')
            try {
                let resultadoOperacion = new Function(`return ${expresion}`)()
                resultado.value = resultadoOperacion
                operaciones = []
            } catch {
                resultado.value = 'Error'
            }
        }

        if (e.target.id === 'clear') {
            operaciones = []
            resultado.value = ''
        }
    }
}
