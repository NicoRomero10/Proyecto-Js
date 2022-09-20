



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

//excursiones 

const elegido = [];

        elegido.push(new excursiones(001 , "Buceo" , 1 , 5000))
        elegido.push(new excursiones(002 , "Paseo en barco" , 1 , 2000))
        elegido.push(new excursiones(003 , "Avistaje de delfines" , 1 , 3000))



let facturacion = document.createElement("p");
facturacion.innerHTML = "<h2> Gracias por su compra </h2> <br> <h2> Excursiones seleccionadas: </h2>"
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


//FORMAS DE PAGO VERSION EVENTOS

document.getElementById("eventos").addEventListener("mouseover", manejador);
document.getElementById("eventos").addEventListener("mouseout", manejador);
document.getElementById("credito").addEventListener("click", saludo);
document.getElementById("debito").addEventListener("click", saludo);
document.getElementById("efectivo").addEventListener("click", saludo);



function manejador(e) {

    switch(e.type){
        case "mouseover":
            this.style.color = "red";
            break;
        case "mouseout":
            this.style.color = "black";
            break;
    }
}

function saludo(e) {
    
    alert("seleccionaste forma de pago " + e.target.id);
        if(e.target.id == "credito") {
            alert ("Tu compra se pagara en pesos segun la cotizacion del dolar al cierre de la tarjeta");
            let credito = document.createElement("p");
    credito.innerHTML = e.target.id
    document.body.appendChild(credito);
    
        }
        else if(e.target.id == "debito") {
            alert ("tu compra fue realizada con exito");
            let debito = document.createElement("p");
    debito.innerHTML = e.target.id
    document.body.appendChild(debito);
        }
        
        else if(e.target.id == "efectivo") {
            alert ("recibiras una tarjeta con descuentos durante tu estadia");
            let efectivo = document.createElement("p");
    efectivo.innerHTML = e.target.id
    document.body.appendChild(efectivo);
        }
}




    