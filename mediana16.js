// Ejercicio

const values = [];

function agregarNumero() {
    const inputValue = document.getElementById("values");
    const valuesList = document.getElementById("resultLista");
    values.push(parseFloat(inputValue.value));
    valuesList.innerHTML = "Los números son: " + values;
    inputValue.value = "";

    const correcto = document.getElementById("resultPromedio");
    correcto.innerHTML = "Si es correcto presiona el botón 'Calcular Mediana'.";
}

function calcularMediana() {
    const resultSect = document.getElementById("resultadoFinal");
    let orderValues = values;
    for (i of orderValues) {
        for (i = 0; i < orderValues.length; i++) {
            if (orderValues[i] > orderValues[i + 1]) {
                const v = orderValues[i];
                orderValues[i] = orderValues[i + 1];
                orderValues[i + 1] = v;
            }
        }
    }
    if (orderValues.length % 2) {
        const index = (orderValues.length / 2) - 0.5;
        const median = orderValues[index];
        resultSect.innerHTML = `La mediana es: ${median.toFixed(2)}`;
        
    } else {
        const index = orderValues.length / 2;
        const median = (orderValues[index] + (orderValues[index - 1])) / 2;
        resultSect.innerHTML = `La mediana es: ${median.toFixed(2)}`;
    }
}

function limpiarValues() {
    const inputValue = document.getElementById("values");
    const valuesList = document.getElementById("resultLista");
    const resultSect = document.getElementById("resultadoFinal");
    values.splice(0,values.length);
    inputValue.value = "";
    valuesList.innerText = "";
    resultPromedio.innerText = "";
    resultSect.innerText = "";
}