


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


//SELECCION DE PAGO

// 

let pagar = parseInt(prompt("Ingrese forma de pago('1', '2' , '3'): \n1-Credito\n2-Debito\n3-Efectivo\nPresione 0, si quiere finalizar" ));
while(pagar != "0"){
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
pagar = parseInt (prompt("Seleccionaste las opciones('1', '2', '3'): \n1 Credito \n2 Debito \n3 Efectivo\nPara finalizar, presione 0"));



}



let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    alert("Formulario Enviado");
}



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










// //PRIMERA ENTREGA PROYECTO FINAL
// let option;
// const excursiones = [
//     {
//         id: 1,
//         dia: 1,
//         excursion: "Paseo de playas",
//         estado: "Pendiente",
//     },
//     {
//         id: 2,
//         dia: 2,
//         excursion: "Excursion y buceo",
//         estado: "Pendiente",   
//     }
// ];

// const dia = [
//     'Lunes',
//     'Martes',
//     'Miercoles',
//     'Jueves',
//     'Viernes',
//     'Sabado',
//     'Domingo',
// ];

// const estado = [
//     'En proceso',
//     'Pendiente',
//     'Finalizado',
// ];


// while(option !== 0) {
//     option = Number(prompt('Ingrese una opcion:\n1. Agregar Excursion\n2. Ver Excursiones\n0. Salir'));
//     switch (option) {
//         case 1:
//                 const dia = Number(prompt('Ingrese el dia de la semana, de la excursion que desea crear:\n 1. Lunes\n 2. Martes\n 3. Miercoles\n 4. Jueves\n 5. Viernes\n 6. Sabado\n 7. Domingo'));
//                 const excursion = prompt('Ingrese la excursion:');
//                 const estado = Number(prompt('Ingrese el estado inicial de la excursion:\n 1. En proceso\n 2. Pendiente\n 3.Finalizada'));
//                 const id = getLastID() + 1;
//                 crearExcursion(id, dia, excursion, estado);
//             break;
//         case 2:
//                 getExcursionesTodas();
//             break;

//         case 0:
//                 alert('Gracias, vuelva pronto'); 
//                 break;
    
//         default:
//             alert('La opcion ingresada no es correcta, intente nuevamente');
//             break;
//     }
// }

// function crearExcursion(id, dia, excursion, estado) {
//     excursiones.push({
//         id,
//         dia,
//         excursion,
//         estado: estado[estado - 1],
//     });

//     // return 'Tarea agregada correctamente con el id ' + id;
// }

// function getExcursionesTodas(){
//     excursiones.forEach((excursion) => console.log(excursion.id + " - " + dia[excursion.dia - 1] + " - " + excursion.excursion + " - " + excursion.estado));
// }

// function getLastID(){
//     return excursiones.length;
// }




/*
let option;
const tareas = [
    {
        id: 1,
        dia: 1,
        tarea: "Ir a comer",
        estado: "Pendiente",
    },
    {
        id: 2,
        dia: 2,
        tarea: "Ir a comer",
        estado: "Pendiente",   
    }
];

const dia = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo',
];

const estado = [
    'En proceso',
    'Pendiente',
    'Finalizado',
];


while(option !== 0) {
    option = Number(prompt('Ingrese una opcion:\n1. Agregar Tarea\n2. Ver Tareas\n0. Salir'));
    switch (option) {
        case 1:
                const dia = Number(prompt('Ingrese el dia de la semana, de la tarea que desea crear:\n 1. Lunes\n 2. Martes\n 3. Miercoles\n 4. Jueves\n 5. Viernes\n 6. Sabado\n 7. Domingo'));
                const tarea = prompt('Ingrese la tarea:');
                const estado = Number(prompt('Ingrese el estado inicial de la tarea:\n 1. En proceso\n 2. Pendiente\n 3.Finalizada'));
                const id = getLastID() + 1;
                crearTarea(id, dia, tarea, estado);
            break;
        case 2:
                getTareasTodas();
            break;

        case 0:
                alert('Gracias, vuelva pronto'); 
                break;
    
        default:
            alert('La opcion ingresada no es correcta, intente nuevamente');
            break;
    }
}

function crearTarea(id, dia, tarea, estado) {
    tareas.push({
        id,
        dia,
        tarea,
        estado: estado[estado - 1]
    });

    // return 'Tarea agregada correctamente con el id ' + id;
}

function getTareasTodas(){
    tareas.forEach((tarea) => console.log(tarea.id + " - " + dia [tarea.dia - 1] + " - " + tarea.tarea + " - " + tarea.estado));
}

function getLastID(){
    return tareas.length;
}

*/

