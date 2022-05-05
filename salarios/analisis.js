// Helpers
function esPar(numerito){
    return (numerito % 2 === 0);
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }

// Calculadora de mediana 
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

  // Mediana General
const salariosgt = Guatemala.map(
    function(personita){
        return personita.salary;
    }
);

const salariosgtSorted = salariosgt.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

const medianaGeneralGT = medianaSalarios(salariosgtSorted);

//Mediana del top 10%
const spliceStart = (salariosgtSorted.length * 90) / 100;
const spliceCount = salariosgtSorted.length - spliceStart;

const salariosGTtop10 = salariosgtSorted.splice(
    spliceStart,
    spliceCount
);

const medianaTop10GT = medianaSalarios(salariosGTtop10);

console.log(
    medianaGeneralGT,
    medianaTop10GT
);