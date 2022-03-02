//Codigo del Cuadrado

console.group("Cuadrados"); //Abre: Para comentar y que salga en pantalla

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
}

// const perimetroCuadrado = ladoCuadrado * 4;
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");

function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd(); //Cierre: Para comentar y que salga en pantalla

//Codigo del Triángulo
console.group("Triángulos");//Abre: Para comentar y que salga en pantalla

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
// console.log("Los lados del triángulo miden: "
//     + ladoTriangulo1 + "cm, "
//     + ladoTriangulo2 + "cm, "
//     + baseTriangulo + "cm");

// const alturatriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturatriangulo + "cm");

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perímetro del triángulo es de: " + perimetroTriangulo + "cm"); 

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

// const areaTriangulo = (baseTriangulo * alturaTriangulo / 2);
// console.log("El area del triángulo es de: " + areaTriangulo + "cm^2");

function areaTriangulo (base, altura){
    return (base * altura) / 2;
}

console.groupEnd(); //Cierre: Para comentar y que salga en pantalla

//Codigo del circulo
console.group("Circulos");

// Radio
// const radioCirculo =4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

//Diametro
// const diametroCirculo = radioCirculo * 2;
// console.log("El diámetro del circulo es: " + diametroCirculo + "cm");

function diametroCirculo (radio){
    return radio * 2;
}

//PI
const PI = Math.PI;
// console.log("PI es: " + PI);

//Circunferencia
// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perímetro del circulo es: " + perimetroCirculo + "cm");

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Area
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("El area del circulo es: " + areaCirculo + "cm^2");

function areaCirculo (radio){
    return (radio * radio) * PI;
}
console.groupEnd("Circulos");

// Aqui nos conectamos con el html (buttom)

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value; //Asi obtenemos el valor q escribieron los usuarios
    //en el input, en el html. lo recibimos desde js
    const perimetro = perimetroCuadrado(value);
    alert ("El perímetro cuadrado es: " + perimetro + "cm");
}
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert("El área del cuadrado es: " + area + "cm^2");
}

//Triangulo
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputTriangulo-1");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("inputTriangulo-2");
    const value2 = Number(input2.value);

    const base = document.getElementById("inputTriangulo-Base");
    const value3 = Number(base.value);

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert("El perímetro del triángulo es: " + perimetro + "cm");
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("inputTriangulo-1");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("inputTriangulo-2");
    const value2 = Number(input2.value);

    const base = document.getElementById("inputTriangulo-Base");
    const value3 = Number(base.value);

    const altura = document.getElementById("inputTriangulo-Altura");
    const value4 = Number(altura.value);

    const area = areaTriangulo(value3, value4);
    alert ("El área del triángulo es: " + area + "cm^2");
}  

//Circulo

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert("El perímetro del circulo es: " + perimetro + "cm");
}
function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert("El área del circulo es: " + area + "cm^2");
}

// Isósceles

function calcularAlturaIsosceles(){
    const lado1 = document.getElementById("lado1").value;
    const lado2 = document.getElementById("lado2").value;
    const base = document.getElementById("ladoBase").value;

    if(lado1 === lado2 && lado1 != base && lado2 != base){
        const altura = Math.sqrt(lado1**2 - (base**2 / 4)); 
        alert("Es un triángulo Isósceles con altura de: " + altura);
    }else{
        alert("No es un triángulo Isóceles: lado 1 y 2 deben ser iguales pero diferentes a la base y la base menor a los lados");
    }
}

//Otra forma mismo resultado

// function calcularAlturaIsosceles(){
//     const lado1 = document.getElementById("lado1").value;
//     const lado2 = document.getElementById("lado2").value;
//     const base = document.getElementById("ladoBase").value;
//     if(lado1 === lado2 && lado1 > base){
//         const catetoOpuesto = base/2;
//         const hipotenusa = lado2;
//         const altura = Math.sqrt((Math.pow(hipotenusa, 2) - Math.pow(catetoOpuesto, 2)));
//         alert("La altura del triangulo es: " + altura)
//     }
//     else {
//         alert("No es un triángulo Isóceles: lado 1 y 2 deben ser iguales pero diferentes a la base y la base menor a lado 1.");
//     }
// }

