function limpiar(){
    document.getElementById("extras1").value = "";
    document.getElementById("extras2").value = "";
    document.getElementById("extras3").value = "";
    document.getElementById("extras4").value = "";
    document.getElementById("extras5").value = "";
}

function calculohoras(){
    let Price = document.getElementById("extras1");
    let extras1 = Price.value;

    let hours = document.getElementById("extras2");
    let extras2 = hours.value;

    let ordin = document.getElementById("extras3");
    let extras3 = ordin.value;

    let sueldo = extras1 / 30;

    let ordinarias = sueldo / extras2

    let hourn = ordinarias * 1.5;

    let total = hourn * extras3;

    const resulth = document.getElementById("extras4");
    resulth.innerText. = "Q."+hourn;

    const resultP = document.getElementById("extras5");
    resultP.innerText = "Q."+total;
}


/* funciones para los gastos */

function gasto(TIPO, COSTO){
    this.tipo = TIPO;
    this.costo = COSTO;    
}

function calculogasto(){

    var perdidas = [];

    var dato1 = document.getElementById('cantidad');
    var cantidad = dato1.value;

    var dato2 = document.getElementById('gasto1');
    var gasto1 = dato2.value;

    perdidas.push(new gasto(gasto1, cantidad));

    for(let i = 0; i < perdidas.length; i++){
        i = i + i;
        const resultP = document.getElementById("totalesg");
        resultP.innerText = "Q."+i;
    }
}

