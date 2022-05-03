function mAritmetica(lista){
    let sumaLista = 0;
    for (let i = 0; i< lista.length; i++){
    sumaLista = sumaLista1 + lista[i];
    }

    /* const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            reuturn valorAcumulado + nuevoElemento;
        }
    );*/



    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

