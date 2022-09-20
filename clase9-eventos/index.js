//DARLE UN CIERRE CON UN BOTON
// QUE LA PALABRA SELECCIONADA CAMBIE DE COLOR
// SUMAR CANTIDAD DE PERSONAS Y QUE CAMBIE EL RESULTADO


// //FORMAS DE PAGO VERSION EVENTOS

// document.getElementById("eventos").addEventListener("mouseover", manejador);
// document.getElementById("eventos").addEventListener("mouseout", manejador);
// document.getElementById("credito").addEventListener("click", saludo);
// document.getElementById("debito").addEventListener("click", saludo);
// document.getElementById("efectivo").addEventListener("click", saludo);


// function manejador(e) {
//     // if (!e) e = window.event; //por si usamos navegador de window

//     switch(e.type){
//         case "mouseover":
//             this.style.color = "red";
//             break;
//         case "mouseout":
//             this.style.color = "black";
//             break;
//     }
// }

// function saludo(e) {
//     // if (!e) e = window.event; //por si usamos navegador de window
//     alert("seleccionaste forma de pago " + e.target.id);
//         if(e.target.id == "credito") alert ("Tu compra se pagara en pesos segun la cotizacion del dolar al cierre de la tarjeta");
//         else if(e.target.id == "debito") alert ("tu compra fue realizada con exito");
//         else if(e.target.id == "efectivo") alert ("recibiras una tarjeta con descuentos durante tu estadia");
//     }

    


    
    
    // else if (e.target.id == "parrafo2") alert("has pulsado el parrafo 2");

    


// alert("Tu compra se pagara en pesos segun la cotizacion del dolar al cierre de la tarjeta ")

//EJEMPLO1

// const parrafo = document.querySelector("p");
// const boton = document.querySelector("button");

// let contador =0;

// boton.addEventListener('click', () => {
//     console.log("Click");
//     contador++;
//     parrafo.textContent = contador;
// });



//EJEMPLO 2

// const parrafo = document.querySelector("p");
// const input = document.querySelector("input");
// const boton = document.querySelector("button");

// input.addEventListener('change', (e) => {
//     parrafo.textContent = e.target.value;
// });



//EJEMPLO 3

// const bloque = document.querySelector('.bloque');

// bloque.addEventListener('mouseenter', () => {
//     bloque.style.backgroundColor = 'red';
// });

// bloque.addEventListener('mouseleave', () => {
//     bloque.style.backgroundColor = 'blue';
// });





/*
let total = 0;


//parametros

class excursiones {
    constructor(id , excursiones, cantidad, precio){
        this.id = id;
        this.excursiones = excursiones;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}


//excursiones que iran al carrito

const elegido = [];

        elegido.push(new excursiones(001 , "Buceo" , 1 , 5000))
        elegido.push(new excursiones(002 , "Paseo en barco" , 1 , 2000))
        elegido.push(new excursiones(003 , "Avistaje de delfines" , 1 , 3000))



let facturacion = document.createElement("p");
facturacion.innerHTML = "<h3> Gracias por su compra </h3> <br> <h3> Excursiones seleccionadas: </h3>"
document.body.appendChild(facturacion);

let opciones = parseInt(prompt("Ingrese las excursiones deseadas('1', '2' , '3'): \n1-Buceo: Valor $5000\n2-Paseo en barco: Valor $2000\n3-Avistaje de delfines: Valor $3000\nPresione 0, si quiere finalizar" ));
while(opciones != "0"){
    switch (opciones){
        case 1: total = total + elegido[0].precio
    alert("Añadiste a tu compra: " + elegido[0].excursiones + " " + elegido[0].cantidad + " $" + elegido[0].precio)

    let prime = document.createElement("p");
    prime.innerHTML = elegido[0].excursiones + " " + elegido[0].cantidad;
    document.body.appendChild(prime);
    break;

    case 2: total = total + elegido[1].precio
    alert("Añadiste a tu compra: " + elegido[1].excursiones + " " + elegido[1].cantidad + " $" + elegido[1].precio);

    let sec = document.createElement("p");
    sec.innerHTML = elegido[1].excursiones + " " + elegido[1].cantidad;
    document.body.appendChild(sec);
    break;

    case 3: total = total + elegido[2].precio
    alert("Añadiste a tu compra: " + elegido[2].excursiones + " " + elegido[2].cantidad + " $" + elegido[2].precio);

    let third = document.createElement("p");
    third.innerHTML = elegido[2].excursiones + " " + elegido[2].cantidad;
    document.body.appendChild(third);
    break;
    default: alert("Opcion incorrecta");
}

opciones = parseInt (prompt("Seleccionaste las opciones('1', '2', '3'): \n1 Buceo: Valor $5000 \n2 Paseo en barco: Valor $2000\n3 Avistaje de delfines: Valor $3000\nPara finalizar, presione 0"));
}

let factura1 = document.getElementById('total');
factura1.innerHTML = "<h2>El total de su compra es: </h2>" + "$" + total;
document.body.appendChild(factura1);
*/

//SELECCION DE PAGO


//------------------------------------------------------------
//prueba pago con botones

// let pagar = boton

// const parrafo = document.querySelector("p");
// const boton = document.querySelectorAll('button');

// boton.forEach(function(item) {

//     item.addEventListener('click', function () {
        
//         item.style.backgroundColor = item.dataset.color || 'pink';

//         item.addEventListener('mouseleave', () => {
//             item.style.backgroundColor = 'white';
//             parrafo.addEventListener('change', (e) => {
//                  parrafo.textContent = e.target.value;
//                 });
//     });
    
//         });
//     })

//--------------------------------------------------



// let pagar = parseInt(prompt("Ingrese forma de pago('1', '2' , '3'): \n1-Credito\n2-Debito\n3-Efectivo\nPresione 0, si quiere finalizar" ));
/*while(pagar != "0"){
    switch (pagar){
        case 1: if(pagar === 1) 
    alert("Tu compra se pagara en pesos segun la cotizacion del dolar al cierre de la tarjeta ")

    let primero = document.createElement("p");
    primero.innerHTML = "Credito";
    document.body.appendChild(primero);
    break;

    case 2: if(pagar === 2)
    alert("Tu compra fue realizada con exito ")

    let segundo = document.createElement("p");
    segundo.innerHTML = "Debito";
    document.body.appendChild(segundo);
    break;

    case 3: if(pagar === 3)
    alert("Usted tendra descuentos durante su estadia. Gracias por su compra ")

    let tercero = document.createElement("p");
    tercero.innerHTML = "Efectivo";
    document.body.appendChild(tercero);
    break;
    
    default: alert("Opcion incorrecta");
    break;
}

// pagar = parseInt (prompt("Seleccionaste las opciones('1', '2', '3'): \n1 Credito \n2 Debito \n3 Efectivo\nPara finalizar, presione 0"));


}
*/
/*
//agregado

const parrafo = document.querySelector("p");
const input = document.querySelector("input");
const boton = document.querySelector("button");

input.addEventListener('change', (e) => {
    if (input !== 1)
    parrafo.textContent = e.target.value;
});
*/



// let miFormulario = document.getElementById("formulario");
// miFormulario.addEventListener("submit", validarFormulario);

// function validarFormulario(e){
//     e.preventDefault();
//     alert("Formulario Enviado");
// }

/*

let boton = document.getElementById("btnPrincipal")
boton.addEventListener("click", respuestaClick)
function respuestaClick(){
    alert("Ingresaste correctamente");
}


const respuesta = (nombre) => {
    console.log("Hola click " + nombre);//puedo poner una alerta
}


let botones = document.getElementById("btnPrincipal");
let evento = prompt("ingrese el evento");
boton.addEventListener("click", () => respuesta("nico"));


*/











//----------------------------------------------


// const respuesta = () => {
//     console.log("Hola click");//puedo poner una alerta
// }

// let boton = document.getElementById("btnPrincipal");
// boton.onclick = respuesta;

//------------------------------------------------


// const respuesta = (nombre) => {
//     console.log("Hola click " + nombre);//puedo poner una alerta
// }

// let boton = document.getElementById("btnPrincipal");
// let evento = prompt("ingrese el evento");
// boton.addEventListener("click", () => respuesta("nico"));

//-----------------------------------------

/*let boton = document.getElementById("btnPrincipal");
let saludo = document.getElementById("saludo");

boton.addEventListener("mousedown", () => {
    saludo.className = "rojo"
});
boton.addEventListener("mouseover", () => {
    saludo.className = "azul"
});
boton.addEventListener("mouseout", () => {
    saludo.className = "amarillo"
});
boton.addEventListener("click", () => {
    saludo.className = "verde"
});
*/

//----------------------------------------------

// let nombre = document.getElementById("nombre");
// let saludo = document.getElementById("saludo");


// nombre.addEventListener("keyup", (e) => {
//     if(e.key === "a"){
//         saludo.className = "rojo";
//     }else if(e.key === "s"){
//         saludo.className = "verde";
//     }else if(e.key === "d"){
//         saludo.className = "amarillo";
//     }else if(e.key === "f"){
//         saludo.className = "azul";
//     }
// });



//-----------------------------------------------------

// let nombre = document.getElementById("nombre");
// nombre.addEventListener("change" , () => console.log("change"));

//-----------------------------------------

// let nombre = document.getElementById("nombre");
// let saludo = document.getElementById("saludo");

// nombre.addEventListener("input", () => {
//     if(!nombre.ariaValueMax.includes("@")){
//         saludo.className = "rojo";
//     }else{
//         saludo.className = "verde";
//     }
// });


//--------------------------------------

// let nombre = document.getElementById("nombre");
// let saludo = document.getElementById("saludo");

// let formulario = document.getElementById("formulario")
// formulario.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log("hola");
// }); //repasar (1:10 hs)


// let productos =[];

// let contenedor = document.getElementById("contenedor");
// let formulario = document.getElementById("formulario");
// formulario.addEventListener("submit", (e) => {
//     e.preventDefault();
    
//     let inputs = e.target.children;
//     productos.push(inputs[0].value);

//     productos.forEach((item) => {
//         let div = document.createElement("div");
//         div.innerHTML = item;
//         contenedor.append(div);
//     });

//     inputs[0].value = "";
// })