const calcularMediaArmonica = (lista1) =>{
        const listaOrdenada = lista1.sort((a,b) => a-b);
        const cantidadTotal = listaOrdenada.length;
        const valoresInvertidos = listaOrdenada.map((elemento) => 1/elemento);
        const sumaValoresInvertidos = valoresInvertidos.reduce((acc, cur)=> acc + cur);
        const mediaArmonica = cantidadTotal/sumaValoresInvertidos
    

        const resultadoFinal = document.getElementById("resultadoFinal");
        resultadoFinal.innerText = "" + mediaArmonica;
}

function mediaArmonica(){
    const input = document.getElementById(`values`)
    const value = input.value
    arrayOfStrings = JSON.parse(`[${value}]`);
    const resultado = calcularMediaArmonica(arrayOfStrings)
    return resultadoFinal.innerText = `${resultado[0]}`; 
}       
function limpiarValues() {
    const values = document.getElementById("values");
    values.value = "";
    const resultadoFinal = document.getElementById("resultadoFinal");
    resultadoFinal.innerText = "";
}