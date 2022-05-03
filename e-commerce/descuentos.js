function PriceDiscount(){
    let Price = document.getElementById("InputPrice");
    let InputPrice = Price.value;

    let Discount = document.getElementById("InputDiscount");
    let InputDiscount= Discount.value;

    porcentaje = 100 - InputDiscount;

    let PriceDiscountReal = (InputPrice * porcentaje) / 100;

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "Q"+PriceDiscountReal;
}

function Descuento1(){
    alert('Se apliacara el descuento de 20%')
    let Price = document.getElementById("InputPrice");
    let InputPrice = Price.value;

    porcentaje = 100 - 20;

    let PriceDiscountReal = (InputPrice * porcentaje) / 100;

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "Q"+PriceDiscountReal;

}

function Descuento2(){
    alert('Se apliacara el descuento de 30%')
    let Price = document.getElementById("InputPrice");
    let InputPrice = Price.value;

    porcentaje = 100 - 30;

    let PriceDiscountReal = (InputPrice * porcentaje) / 100;

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "Q"+PriceDiscountReal;

}