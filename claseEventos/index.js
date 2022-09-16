//recomendado para 'usar addEventListener'

// const respuesta = () => {
//     console.log("Hola click");//puedo poner una alerta
// }

// let boton = document.getElementById("btnPrincipal");
// let evento = prompt("ingrese el evento");
// boton.addEventListener("click", respuesta);


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

    