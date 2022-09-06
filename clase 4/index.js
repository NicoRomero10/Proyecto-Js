/*CODIGO PARA ESTUDIAR*/

/*function ingresarNombre () {
    alert ("Bienvenido/a a Malone - Fabricamos lo que nos gusta 🍕");
    let nombre = prompt ("Ingrese su nombre");
    let apellido = prompt ("Ingrese su apellido");
    let direccion = prompt ("Ingrese su dirección exacta");
    while (nombre === "" || apellido=== "" || direccion === "") {
        nombre = prompt ("Ingrese su nombre");
        apellido = prompt ("Ingrese su apellido");
        direccion = prompt ("Ingrese su dirección exacta");
    }
    console.log("Hola " + nombre + " " + apellido);
    alert ("Hola " + nombre + " " + apellido + "," + " ¿Listo/a para realizar su pedido?")
}

function mostrarMenu () {
    let menu;
    do {
    menu = parseInt (prompt ("¿Qué se le antoja hoy 🤤?:\n1: 12 empanadas + 2 salsas (a elección) $2000. \n2: 3 Muzzarellas grandes $2630. \n3: 8 Empanadas (a elección) + Bebida 1,5 lt (línea Coca-Cola) $1450. \n4: 1 Pizza mediana (Jamón/Napolitana/Muzzarella) + 6 Empanadas (a elección) $1630."))} 
    while (menu != 1 && menu!=2 && menu!=3 && menu!=4)
    switch (menu) {
        case 1:
            return "Promo 1";
        case 2:
            return "Promo 2";
        case 3:
            return "Promo 3";
        case 4:
            return "Promo 4";
    }
}

function validarPrecio (menu) {
    if (menu === "Promo 1") {
        return 2000;
    }
    else if (menu === "Promo 2") {
        return 2630;
    }
    else if (menu=== "Promo 3") {
        return 1450;
    }
    else if (menu === "Promo 4") {
        return 1630;
    }
    else {
        console.log("No es una opción válida");
    }

}

function cobrar (nombre,precio) {
alert ("Usted seleccionó lo siguiente: " +nombre +"\nPrecio: $"+precio);
let pago = parseInt (prompt ("¿Con cuánto va a pagar?"))
if (pago>= precio) {
    alert ("Gracias por su pedido, su vuelto es " + "$" + (pago - precio) + "," + " enseguida se lo enviaremos a su domicilio." + "\nDemora estimada: 30 minutos.")
} else {
    alert ("No te alcanza para realizar tu pedido 😫")
}
}

ingresarNombre ();
let menuNombre = mostrarMenu ();
let precioMenu = validarPrecio (menuNombre);
cobrar (menuNombre, precioMenu)



/* CODIGO DE NICO
let nombre = prompt ("Ingrese su nombre");
alert("hola " + nombre + " bienvenido a Turbulencia Viajes: Haz click para continuar");
let pedido = prompt("Ingresar pedido");

if (pedido === "coffe + tostado"){
    function sumar(num1, num2){
    let resultado = num1 + num2;
    alert(resultado);
}
sumar(300, 450);

    alert("pedido aprobado");

}else{
    alert("pedido rechazado");}


    /* ACA QUIERO CORTAR CON UN BREAK PERO NO ME LO TOMA
       LA IDEA ES QUE CUANDO EL PEDIDO SEA RECHAZADO SE CORTE TODO*/








/* ESTRUCTURA DE UNA FUNCION

fuction nombreFuncion(){
    codigo a ejecutar por una funcion
}
*/

/*function saludar(){
    let nombre = prompt("ingrese su nombre");
    let mensaje = `Hola ${nombre}`;
    alert(mensaje);
}

saludar();
*/


/*ESTRUCTURA DE UNA FUNCION CON PARAMETROS

fuctioin nombreFuncion(parm1, parm2,..., parm){
    codigo a ejecutar por la funcion
}
*/
/*ejemplo
function sumar(num1, num2){
    let resultado = num1 + num2;
    console.log(resultado);
}

sumar(10, 5);
*/

/*function sumar(num1, num2){
    let resultado = num1 + num2;
    alert(resultado);
}

let num1 = parseInt(prompt("ingrese el primer numero"));
let num2 = parseInt(prompt("ingrese el segundo numero"));
sumar(num1, num2);
*/

/*EJEMPLO 1
function suma(x, y){
    return x + y;
}

console.log(suma(10,5));
*/


/*EJEMPLO DE CALCULADORA
function calculadora(num1, num2, operacion){
    switch(operacion){
        case "+":
            return num1 + num2;
            break;

        case "-":
            return num1 + num2;
            break;

        case "*":
            return num1 * num2;
            break;

        case "/":
            return num1 / num2;
            break;

            default:
                return "operacion no definida"
                break
    }
}

let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));
let operacion = prompt("Ingrese la operacion");

let resultado = calculadora(num1, num2, operacion);
alert(resultado);
*/

/*function saludar(){
    console.log("hola");
    return
    console.log("chau");
    /*EL RETURN CORTA LA FUNCION, ES UNA ESPECIE DE BREAK
    
}

saludar()
*/

/*function saludar(nombre){
    if(nombre === "nico"){
        return "hola nico";
    }else{
        return "hola desconocido";
    }
}

let saludo = saludar("nico");
alert(saludo);
*/
/*
let resultado = 0; /*DECLARAACION DE VARIABLE GLOBAL, 
FUERA DE LA FUNCION

function sumar(){
    resultado = 5 + 6;
}

sumar();
console.log(resultado);
*/

// const suma = (a,b) => a + b;
// const resta = (a,b) => a - b;
// const iva = x => x * 0.21;

// let precioProducto = 500;
// let descuento = 50;

// // let nuevoPrecio = resta(suma(precioProucto, iva(precioProduto)), descuento);
// let nuevoPrecio = resta(suma(500, iva(500 + 0.21)), 50);


