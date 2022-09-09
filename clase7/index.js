// FUNCIONES DE ALTO ORDEN

function mayorQue(n){
    return m => m >n;
}

let mayorQueCinco = mayorQue(5); // m => m > 5
console.log();







// METODOS AVANZADOS DE LOS ARREGLOS

//FOR EACH: RECORRE EL ARREGLO COMO UN FOR TRADICIONAL

const productos = [
    { id: 1, nombre: "pantalon", precio: 100 },
    { id: 1, nombre: "zapato", precio: 1700 },
    { id: 1, nombre: "gorra", precio: 600 },
    { id: 1, nombre: "camisa", precio: 1400 },
];

productos.forEach(item => console.log(item));
