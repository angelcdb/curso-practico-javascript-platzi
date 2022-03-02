//RETO:

function encontrarModa(lista){
    const listaCount = {};
    
    lista.map(
        function(elemento){
            if (listaCount[elemento]){
                listaCount[elemento] += 1;
            } else{
            listaCount[elemento] = 1;
            }
        });
    const listaArray = Object.entries(listaCount).sort(
            function(elementoA, elementoB) {
                return elementoA[1] - elementoB[1]
                });
    const moda = listaArray[listaArray.length - 1]
    return moda
}
function calcularModa(){
    const input = document.getElementById(`values`)
    const value = input.value
    arrayOfStrings = JSON.parse(`[${value}]`);
    const resultado = encontrarModa(arrayOfStrings)
    return resultadoFinal.innerText = `${resultado[0]} | con ${resultado[1]} repeticiones` 
}       
function limpiarValues() {
    const values = document.getElementById("values");
    values.value = "";
    const resultadoFinal = document.getElementById("resultadoFinal");
    resultadoFinal.innerText = "";
}
