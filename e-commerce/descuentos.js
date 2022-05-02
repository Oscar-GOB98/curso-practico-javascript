const precioOriginal = 100;
const descuento = 15;

const porcentajePrecioConDescuento = 100 - descuento;

const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
});

function RealizarDescuento(precio, descuento){
    const porcentaje = 100 - descuento;
    const precioReal = (precio * porcentaje) / 100;

    console.log('El precio a pagar con descuento es: '+precioReal);
}