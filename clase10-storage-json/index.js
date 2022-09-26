

let excursiones = [
        {
            id: 1,
            nombre: "Paseo en barco",
            precio: 4000,
            imagen: "./img/paseo-barco"
        },
        {
            id: 2,
            nombre: "Buceo",
            precio: 7500,
            imagen: "./img/buceo.jpg"
        },
        {
            id: 3,
            nombre: "Avistaje de delfines",
            precio: 4500,
            // imagen: 
        },
        {
            id: 4,
            nombre: "Snorkel",
            precio: 600,
            // imagen: 
        },
        {
            id: 5,
            nombre: "Camino de las 7 playas",
            precio: 3500,
            // imagen: 
        },
        {
            id: 6,
            nombre: "Montaña",
            precio: 2000,
            // imagen: 
        },

        
    ];
    
    
    
    const dibujarExcursiones = () => {
        let contenedor = document.getElementById("container");
        excursiones.forEach((producto,indice) => {
        let card = document.createElement("div");
        card.classList.add("card", "col-sm-12", "col-lg-3");
        card.innerHTML=`<img src="${producto.imagen}" class="card-img-top" alt="./img/buceo.jpg">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">${producto.precio}</p>
          <a href="#" class="btn btn-info" onClick="agregarAlCarrito(${indice})" >Comprar</a>
        </div>`;
        contenedor.appendChild(card);
        });
    }

    dibujarExcursiones();
    let cart = []
    let modalexcursion = document.getElementById("cart")
    

    
    const agregarAlCarrito = (indice) => {
        const indiceEncontradoCarrito = cart.findIndex((elemento)=>{
            return elemento.id === excursiones[indice].id
        });
        if(indiceEncontradoCarrito === -1){
            const productoAgregar = excursiones[indice]
            productoAgregar.cantidad = 1;
            cart.push(productoAgregar);
            dibujarCarrito();
        }else{
            cart[indiceEncontradoCarrito].cantidad +=1;
            dibujarCarrito()
        }

        
    };
    
    
    let total = 0;
    const dibujarCarrito = ()=> {
    modalexcursion.className = "cart";
    modalexcursion.innerHTML="";
    if(cart.length > 0){
        cart.forEach((producto, indice)=>{
            total = total + producto.precio * producto.cantidad;
            const carritoContainer = document.createElement("div");
            carritoContainer.className = "producto-carrito";
            carritoContainer.innerHTML = `
            <img class="car-img" src="${producto.imagen}"/>
            <div class="product-details">
            ${producto.nombre}
            </div>
            <div class="product-details"> Cantidad:
            ${producto.cantidad}
            </div>
            <div class="product-details"> Precio: $
            ${producto.precio}
            </div>
            <div class="product-details"> Subtotal: $ 
            ${producto.precio * producto.cantidad}
            </div>
            <button class= "btn btn-info" id="remove-product" onClick="removeProduct( ${indice})">Eliminar producto</buton> `;
            modalexcursion.appendChild(carritoContainer);
            
        });
        const totalContainer = document.createElement("div");
        totalContainer.className="total-carrito";
        totalContainer.innerHTML= `<div class= "total"> TOTAL $ ${total}</div>
        <button class= "btn btn-info finalizar" id="finalizar" onclick="finalizarCompra()"> FINALIZAR COMPRA </button>`
        modalexcursion.appendChild(totalContainer)
    } else {
        modalexcursion.classList.remove("cart");
        
    }
    };
    
    const removeProduct = (indice)=> {
        cart.splice(indice,1);
        dibujarCarrito();
    
    };
    
    const finalizarCompra = () => {
        const total = document.getElementsByClassName("total")[0].innerHTML;
        modalexcursion.innerHTML = "";
        const compraFinalizada = `<div class "compra-finalizada"><p class="compra-parrafo"> YA CASI ES TUYA LA COMPRA, ${total}</p>
        <div class ="datos-cliente">
        <p class="datos-parrafo"> Complete el formulario con sus datos para coordinar la entrega</p>
        <button class= "btn btn-info formulario" onClick="dibujarFormu()"> FORMULARIO </button></div>`; 
        modalexcursion.innerHTML = compraFinalizada;


        

// const pagos = [];

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

        class cliente {
            constructor(nombre, telefono, direccion) {
                this.nombre = nombre;
                this.telefono = telefono;
                this.direccion = direccion; 
            }
        }
        
        let boton = document.getElementById("enviarInfo");
        boton.addEventListener("click", cargarCliente);
    }
}
    





// EJEMPLOS

// let menu = ["cafe", "tostado", "jugo de naranja", "ensaladade frutas"];
// localStorage.setItem("menu", JSON.stringify(menu));

// let menuAlmacenados = JSON.parse(localStorage.getItem("menu"));
// console.log(menuAlmacenados);
// localStorage.removeItem("cursos");


// let productos = [
//     {
//         id: 1,
//         nombre: "Producto 1",
//         precio: 300,
//         // imagen: 
//     },
//     {
//         id: 2,
//         nombre: "Producto 2",
//         precio: 370,
//         // imagen: 
//     },
//     {
//         id: 3,
//         nombre: "Producto 3",
//         precio: 450,
//         // imagen: 
//     },
//     {
//         id: 4,
//         nombre: "Producto 4",
//         precio: 600,
//         // imagen: 
//     },
//     {
//         id: 5,
//         nombre: "Producto 5",
//         precio: 540,
//         // imagen: 
//     },
//     {
//         id: 6,
//         nombre: "Producto 6",
//         precio: 150,
//         // imagen: 
//     },
// ];




// const dibujarProductos = () => {
//     let contenedor = document.getElementById("container");
//     productos.forEach((producto,indice) => {
//     let card = document.createElement("div");
//     card.classList.add("card", "col-sm-12", "col-lg-3");
//     card.innerHTML=`<img src="${producto.imagen}" class="card-img-top" alt="...">
//     <div class="card-body">
//       <h5 class="card-title">${producto.nombre}</h5>
//       <p class="card-text">${producto.precio}</p>
//       <a href="#" class="btn btn-info" onClick="agregarAlCarrito(${indice})" >Comprar</a>
//     </div>`;
//     contenedor.appendChild(card);
//     });
// }
// dibujarProductos();
// let cart = []
// let modalcarrito = document.getElementById("cart")


// const agregarAlCarrito = (indice) => {
//     const indiceEncontradoCarrito = cart.findIndex((elemento)=>{
//         return elemento.id === productos[indice].id
//     });
//     if(indiceEncontradoCarrito === -1){
//         const productoAgregar = productos[indice]
//         productoAgregar.cantidad = 1;
//         cart.push(productoAgregar);
//         dibujarCarrito();
//     }else{
//         cart[indiceEncontradoCarrito].cantidad +=1;
//         dibujarCarrito()
//     }
// };


// let total = 0;
// const dibujarCarrito = ()=> {
// modalcarrito.className = "cart";
// modalcarrito.innerHTML="";
// if(cart.length > 0){
//     cart.forEach((producto, indice)=>{
//         total = total + producto.precio * producto.cantidad;
//         const carritoContainer = document.createElement("div");
//         carritoContainer.className = "producto-carrito";
//         carritoContainer.innerHTML = `
//         <img class="car-img" src="${producto.imagen}"/>
//         <div class="product-details">
//         ${producto.nombre}
//         </div>
//         <div class="product-details"> Cantidad:
//         ${producto.cantidad}
//         </div>
//         <div class="product-details"> Precio: $
//         ${producto.precio}
//         </div>
//         <div class="product-details"> Subtotal: $ 
//         ${producto.precio * producto.cantidad}
//         </div>
//         <button class= "btn btn-info" id="remove-product" onClick="removeProduct( ${indice})">Eliminar producto</buton> `;
//         modalcarrito.appendChild(carritoContainer);
        
//     });
//     const totalContainer = document.createElement("div");
//     totalContainer.className="total-carrito";
//     totalContainer.innerHTML= `<div class= "total"> TOTAL $ ${total}</div>
//     <button class= "btn btn-info finalizar" id="finalizar" onclick="finalizarCompra()"> FINALIZAR COMPRA </button>`
//     modalcarrito.appendChild(totalContainer)
// } else {
//     modalcarrito.classList.remove("cart");
    
// }
// };

// const removeProduct = (indice)=> {
//     cart.splice(indice,1);
//     dibujarCarrito();

// };

// const finalizarCompra = () => {
//     const total = document.getElementsByClassName("total")[0].innerHTML;
//     modalcarrito.innerHTML = "";
//     const compraFinalizada = `<div class "compra-finalizada"><p class="compra-parrafo"> YA CASI ES TUYA LA COMPRA, EL TOTAL ES $ ${total}</p>
//     <div class ="datos-cliente">
//     <p class="datos-parrafo"> Complete el formulario con sus datos para coordinar la entrega</p>
//     <button class= "btn btn-info formulario" onClick="dibujarFormu()"> FORMULARIO </button></div>`; 
//     modalcarrito.innerHTML = compraFinalizada;
// };

// let menu = ["cafe", "tostado", "jugo de naranja", "ensaladade frutas"];
// localStorage.setItem("menu", JSON.stringify(menu));

// let menuAlmacenados = JSON.parse(localStorage.getItem("menu"));
// console.log(menuAlmacenados);
// localStorage.removeItem("cursos");




        //capturar elementos
//         function cargarCliente() {
//             let nombre = document.getElementById("name").value;
//             let telefono = document.getElementById("phone").value;
//             let direccion = document.getElementById("adress").value;
//             let cliente1 = new cliente (nombre, telefono, direccion);
//             console.log(cliente1);
//             mostrarCliente(cliente1);
//         }
        
//         //eliminar elementos
        
//         function mostrarCliente(cliente) {
//             let formulario = document.getElementById("customer");
//             formulario.innerHTML = "";
            
//             //agregar elementos
//             let nuevoContenido = document.createElement("div");
//             nuevoContenido.innerHTML = `<h1> Gracias ${cliente.nombre} sus datos fueron registrados y en breve recibira su pedido en ${cliente.direccion}</h1>`;
        
//             nuevoContenido.className = "info-cliente";
//             formulario.appendChild(nuevoContenido);
//         }




// };


// const elegido = [];

//         elegido.push(new excursiones(001 , "Buceo" , 1 , 5000))
//         elegido.push(new excursiones(002 , "Paseo en barco" , 1 , 2000))
//         elegido.push(new excursiones(003 , "Avistaje de delfines" , 1 , 3000))



// let facturacion = document.createElement("p");
// facturacion.innerHTML = "<h3> Gracias por su compra </h3> <br> <h3> Excursiones seleccionadas: </h3>"
// document.body.appendChild(facturacion);

// let opciones = parseInt(prompt("Ingrese las excursiones deseadas('1', '2' , '3'): \n1-Buceo: Valor $5000\n2-Paseo en barco: Valor $2000\n3-Avistaje de delfines: Valor $3000\nPresione 0, si quiere finalizar" ));
// while(opciones != "0"){
//     switch (opciones){
//         case 1: total = total + elegido[0].precio
//     alert("Añadiste a tu compra: " + elegido[0].excursiones + " " + elegido[0].cantidad + " $" + elegido[0].precio)

//     let prime = document.createElement("p");
//     prime.innerHTML = elegido[0].excursiones + " " + elegido[0].cantidad;
//     document.body.appendChild(prime);
//     break;

//     case 2: total = total + elegido[1].precio
//     alert("Añadiste a tu compra: " + elegido[1].excursiones + " " + elegido[1].cantidad + " $" + elegido[1].precio);

//     let sec = document.createElement("p");
//     sec.innerHTML = elegido[1].excursiones + " " + elegido[1].cantidad;
//     document.body.appendChild(sec);
//     break;

//     case 3: total = total + elegido[2].precio
//     alert("Añadiste a tu compra: " + elegido[2].excursiones + " " + elegido[2].cantidad + " $" + elegido[2].precio);

//     let third = document.createElement("p");
//     third.innerHTML = elegido[2].excursiones + " " + elegido[2].cantidad;
//     document.body.appendChild(third);
//     break;
//     default: alert("Opcion incorrecta");
// }

// opciones = parseInt (prompt("Seleccionaste las opciones('1', '2', '3'): \n1 Buceo: Valor $5000 \n2 Paseo en barco: Valor $2000\n3 Avistaje de delfines: Valor $3000\nPara finalizar, presione 0"));
// }

// let factura1 = document.getElementById('total');
// factura1.innerHTML = "<h2>El total de su compra es: </h2>" + "$" + total;
// document.body.appendChild(factura1);




// //FORMAS DE PAGO VERSION EVENTOS

// document.getElementById("eventos").addEventListener("mouseover", manejador);
// document.getElementById("eventos").addEventListener("mouseout", manejador);
// document.getElementById("credito").addEventListener("click", saludo);
// document.getElementById("debito").addEventListener("click", saludo);
// document.getElementById("efectivo").addEventListener("click", saludo);



// function manejador(e) {

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
    
//     alert("seleccionaste forma de pago " + e.target.id);
//         if(e.target.id == "credito") {
//             alert ("Tu compra se pagara en pesos segun la cotizacion del dolar al cierre de la tarjeta");
//             let credito = document.createElement("p");
//     credito.innerHTML = e.target.id
//     document.body.appendChild(credito);
    
//         }
//         else if(e.target.id == "debito") {
//             alert ("tu compra fue realizada con exito");
//             let debito = document.createElement("p");
//     debito.innerHTML = e.target.id
//     document.body.appendChild(debito);
//         }
        
//         else if(e.target.id == "efectivo") {
//             alert ("recibiras una tarjeta con descuentos durante tu estadia");
//             let efectivo = document.createElement("p");
//     efectivo.innerHTML = e.target.id
//     document.body.appendChild(efectivo);
//         }

//         class cliente {
//             constructor(nombre, telefono, direccion) {
//                 this.nombre = nombre;
//                 this.telefono = telefono;
//                 this.direccion = direccion; 
//             }
//         }
        
//         let boton = document.getElementById("enviarInfo");
//         boton.addEventListener("click", cargarCliente);
        
//         //capturar elementos
//         function cargarCliente() {
//             let nombre = document.getElementById("name").value;
//             let telefono = document.getElementById("phone").value;
//             let direccion = document.getElementById("adress").value;
//             let cliente1 = new cliente (nombre, telefono, direccion);
//             console.log(cliente1);
//             mostrarCliente(cliente1);
//         }
        
//         //eliminar elementos
        
//         function mostrarCliente(cliente) {
//             let formulario = document.getElementById("customer");
//             formulario.innerHTML = "";
            
//             //agregar elementos
//             let nuevoContenido = document.createElement("div");
//             nuevoContenido.innerHTML = `<h1> Gracias ${cliente.nombre} sus datos fueron registrados y en breve recibira su pedido en ${cliente.direccion}</h1>`;
        
//             nuevoContenido.className = "info-cliente";
//             formulario.appendChild(nuevoContenido);
//         }




// }



//EJEMPLO 1
/*
class cliente {
    constructor(nombre, telefono, direccion) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.direccion = direccion; 
    }
}

let boton = document.getElementById("enviarInfo");
boton.addEventListener("click", cargarCliente);

//capturar elementos
function cargarCliente() {
    let nombre = document.getElementById("name").value;
    let telefono = document.getElementById("phone").value;
    let direccion = document.getElementById("adress").value;
    let cliente1 = new cliente (nombre, telefono, direccion);
    console.log(cliente1);
    mostrarCliente(cliente1);
}

//eliminar elementos

function mostrarCliente(cliente) {
    let formulario = document.getElementById("customer");
    formulario.innerHTML = "";
    
    //agregar elementos
    let nuevoContenido = document.createElement("div");
    nuevoContenido.innerHTML = `<h1> Gracias ${cliente.nombre} sus datos fueron registrados y en breve recibira su pedido en ${cliente.direccion}</h1>`;

    nuevoContenido.className = "info-cliente";
    formulario.appendChild(nuevoContenido);
}
*/

//EJEMPLO 2
/*
let boton = document.getElementById("button");
boton.onclick = () => {
    let ele1 = doument.getElementById("procesador");
    let precio1 = parseInt(ele1.options[ele1.selectedIndex].value);
    let ele2 = document.getElementById("monitor");
    let precio2 = parseInt(ele2.options[ele2.selectedIndex].value);
    let ele3 = document.getElementById("discoduro");
    let precio3 = parseInt(ele3.options[ele3.selectedIndex].value);
    let suma = "Total $ ${precio1 + precio2 + precio3}";
    document.getElementById("resultado").value = suma;
}; //no me aparece el resultado plasmado en el DOM
*/






















// let menu = ["cafe", "tostado", "jugo de naranja", "ensaladade frutas"];
// localStorage.setItem("menu", JSON.stringify(menu));

// let menuAlmacenados = JSON.parse(localStorage.getItem("menu"));
// console.log(menuAlmacenados);
// localStorage.removeItem("cursos");


/*

*/










//PARA GUARDAR LOS DATOS USAR "localStorage.setItem"
// "localStorage" RESISTE REINICIOS, CIERRES, APAGADOS, ETC

//EJEMPLO

// localStorage.setItem("numero", "5");
// localStorage.setItem("booleano", true); 

// let numero = localStorage.getItem("numero");
// console.log(typeof(numero));

//---------------------------------------------

// PARA RECUPERAR DATOS USAR "localStorage.getItem"

/*let numero = localStorage.getItem("numero");
console.log(typeof(numero));*/

//---------------------------------------------------

// SESSION STORAGE RECISTE SOLO RECARGAS DE PAGINA

// let historialStorage = ["cafe usd $10, Licuados usd $12, submarino usd $13, gaseosas usd $15, almuerzo usd $18"];
// let contenedor = document.getElementById("contenedor");

// let historial = document.getElementById("historial");
// historial.addEventListener("click", () => {
//     // let compras = JSON.parse(localStorage.getItem("historial"))

//      let compras = ["cafe usd $10, Licuados usd $12, submarino usd $13, gaseosas usd $15, almuerzo usd $18"];

//     compras.forEach(historial => {
//         let li = document.createElement("li");
//         li.innerHTML = historial;
//         contenedor.append(li);
//     })

// })


// const agregarStorage = (nombre, precio) => {
//     let carrito = JSON.parse(localStorage.getItem("carrito"));
//     let producto = {
//         id: carrito.length + 1,
//         nombre: nombre,
//         precio: precio,
//     };

//     carrito.push(producto);
//     localStorage.setItem("carrito", JSON.stringify(carrito))
// }

// let nombre = prompt("ingrese el nombre del producto");
// let precio = prompt("ingrese el nombre del precio");

// agregarStorage(nombre, precio);


//LocalStorage: uarda cadenasde textos; clave => valor,

// SET = Guardando
// GET = Obtener


