//Ejercicio:

let lista = [];

function mostrarDatos(){
    const inputNumero = document.getElementById("inputNumero");
    const numero = Number(inputNumero.value);

    const anadirNumero = lista.push(numero);
    const resultado = document.getElementById("resultLista");

    resultado.innerText = "Tu lista actual tiene los siguientes números: " + lista;
    result.innerText = " Si es correcto, presiona el botón 'Calcular Promedio'";
}

function calcularPromedio() {
    const sumalista = lista.reduce(function 
        (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
    });
    const promedioLista = sumalista / lista.length;

    const resultado = document.getElementById("resultadoFinal");
    resultado.innerText = "" + promedioLista;
}
function limpiarValues() {
    const inputNumero = document.getElementById("inputNumero");
    const resultado = document.getElementById("resultLista");
    const resultadoFinal = document.getElementById("resultadoFinal");
    lista.splice(0,lista.length);
    inputNumero.value = "";
    resultado.innerText = "";
    result.innerText = "";
    resultadoFinal.innerText = "";
}

