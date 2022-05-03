function PriceDiscount(){
    let Price = document.getElementById("InputPrice");
    let InputPrice = Price.value;

    let Discount = document.getElementById("InputDiscount");
    let InputDiscount= Discount.value;

    porcentaje = 100 - InputDiscount;

    let PriceDiscountReal = (InputPrice * porcentaje) / 100;

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es: Q."+PriceDiscountReal+".00";
}