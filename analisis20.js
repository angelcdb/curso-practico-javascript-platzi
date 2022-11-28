//----------------------------------------------------

// Calcular monto y cantidad cuotas mensuales de una compra con tarjeta de credito,
// a partir del total de la compra y la tasa de interes

// find tea in months

function calculateInteresRateInMonths(tea) {
    return Math.pow(1 + (tea / 100), 1 / 12) - 1;
}

// calcular cuotas amount
function calculateInstalmentsAmount(inputNumero, cuotas, monthlyInteresRate) {
    const num = Math.pow(1 + monthlyInteresRate, cuotas) * monthlyInteresRate * inputNumero;
    const den = Math.pow(1 + monthlyInteresRate, cuotas) - 1;
    return num / den
}

function calcular() {
    const inputNumero = Number(document.getElementById('inputNumero').value);
    const tea = Number(document.getElementById('tea').value);
    const cuotas = Number(document.getElementById('cuotas').value);

    const monthlyInteresRate = calculateInteresRateInMonths(tea);

    const instalmentsAmount = calculateInstalmentsAmount(inputNumero, cuotas, monthlyInteresRate);

    const resultLista = document.getElementById("resultLista");
    resultLista.innerHTML = "Cuota mensual a pagar: ";

    const resultadoFinal = document.getElementById('resultadoFinal');
    resultadoFinal.innerHTML = `${(instalmentsAmount).toFixed(2)} x ${cuotas} meses`;
}
function limpiarValues() {
    const inputNumero = document.getElementById("inputNumero");
    const tea = document.getElementById("tea");
    const cuotas = document.getElementById("cuotas");
    const resultLista = document.getElementById("resultLista");
    const resultadoFinal = document.getElementById("resultadoFinal");
   
    inputNumero.value = "";
    tea.value = "";
    cuotas.value = "";
    resultLista.innerText = "";
    resultadoFinal.innerText = "";
}