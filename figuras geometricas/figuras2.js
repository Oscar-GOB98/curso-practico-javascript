// Trabajando con funciones en el taller 3

console.group("Cuadrados");

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();
//////////////////////////////////////////////////////



console.group("Circulo");

function diametroCirculo(){
    let diam = document.getElementById("radio");
    let radio = parseFloat(diam.value);
    let diametro = radio * 2;

    alert(diametro);
}

const PI = Math.PI;

function perimetroCirculo(){
    let peri = document.getElementById("radio");
    let radio = parseFloat(peri.value);

    let perimetro = (radio * 2) * PI;
    alert(perimetro);
}

function areaCirculo(){
    let are = document.getElementById("radio");
    let radio = parseFloat(are.value);

    let area = (radio * radio) * PI;
    alert(area);
}

console.groupEnd();

///////////////////////////////////////////////////////

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    let lado1 = document.getElementById("l1");
    let l1 = parseFloat(lado1.value);

    let lado2 = document.getElementById("l2");
    let l2 = parseFloat(lado2.value);

    let base = document.getElementById("b1");
    let b1 = parseFloat(base.value);

    let tPerimetro = l1 + l2 + b1;

    alert(tPerimetro);
}

function calcularAreaTriangulo(){
    let base = document.getElementById("b1");
    let b1 = parseFloat(base.value);

    let altura = document.getElementById("a1");
    let a1 = parseFloat(altura.value);

    let tArea = (b1 * a1) / 2;
    alert(tArea);
}

function calcularAlturaTrianguloIso(){
    let lado1 = document.getElementById("li1");
    let li1 = parseFloat(lado1.value);

    let lado2 = document.getElementById("li2");
    let li2 = parseFloat(lado2.value);

    let base = document.getElementById("bi1");
    let bi1 = parseFloat(base.value);

    if(li1 == li2){
        let alt = (li1 * li1) - ((bi1 * bi1)/4);
        let altura = Math.sqrt(alt);

        alert(altura);
    }else{
        alert('Los lados del triangulo no son iguales')
    }
}