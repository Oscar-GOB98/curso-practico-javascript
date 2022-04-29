//Código del cuadrado
console.group("Cuadrado");

const ladoCuadrado = 5;

console.log("Los lados del cuadrado miden: "+ ladoCuadrado+"cms");

const perimetroCuadrado = ladoCuadrado * 4;

console.log("El perimetro del cuadrado es: "+ perimetroCuadrado+"cms");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: "+areaCuadrado+"cms^2");

console.groupEnd();

//Código del triángulo
console.group("triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTrinagulo = 4;
const alturaTriangulo = 5.5;

console.log(
    "Los lados del triángulo miden: "
    +ladoTriangulo1
    +"cms, "
    +ladoTriangulo2
    +"cms, "
    +"el área mide "
    +baseTrinagulo
    +"cms"
);

console.log("la altura del triangulo es de "+alturaTriangulo+"cms");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTrinagulo;

console.log("el perimetro del triangulo es de "+perimetroTriangulo+"cms");

const areaTriangulo = (baseTrinagulo * alturaTriangulo) / 2;

console.log("el area del triangulo es de "+areaTriangulo+"cms^2");

console.groupEnd();

console.group("Circulo");

const radioCirculo = 5;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;
const perimetroCirculo = diametroCirculo * PI;
const areaCirculo = (radioCirculo * radioCirculo) * PI;


console.log("el radio del circulo es "+radioCirculo+"cms");
console.log("el diametro del circulo es "+diametroCirculo+"cms");
console.log("el perimetro del circulo es "+perimetroCirculo+"cms");
console.log("pi es "+PI);
console.log("el area del circulo es "+areaCirculo+"cms^2");

console.groupEnd();