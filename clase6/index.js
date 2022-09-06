/*const array1 = [];
const array2 = [1, 2, 3, 4];
const array3 = ["Nico", "Viajes", "Lugares"];
console.log(array2[2] + array2 [3]);
*/

/*const nombres = ["Nico", "Viajes", "Lugares","Rutas", "yani", "maria"]

for(let index = 0; index < nombres.length; index++){
    alert(nombres[index]);
}
*/


// const nombres = ["Nico", "Viajes", "Lugares","Rutas", "yani", "maria"]
// console.log(nombres.length); //longitud del arreglo, te suma directamente lo que agregues

// nombres.push("richard"); /*para agregar un nombre al final*/
// console.log(nombres);
// console.log(nombres.length);

// nombres.unshift("Elena"); /*para agregar un nombre al principio*/ 
// console.log(nombres);

// nombres.pop(); //elimina del final del arreglo
// console.log(nombres);

// nombres.shift(); // elimina del princpio del arreglo
// console.log(nombres);



// const nombres = ["Nico", "Viajes", "Lugares","Rutas", "yani", "maria"];
// const perritos = ["nina", "lola"];
//nombres.splice(2,2); //splice: sive para borrar - el primero es la posicion y el segundo la cantidad a borrar desde ahi.
//console.log(nombres.join("         ")); // join sirve para unir elementos separados por lo que yo quiera
// console.log(perritos.concat(nombres)); // une dos arreglos

//const copia = nombres.slice(2, 5); // slice, hace una copia de un fragmento del arreglo
// console.log(copia);

//console.log(nombres.indexOf("Rutas")); //indexof busca la posicion de un elemento

//console.log(nombres.includes("yani")); //sirve para buscar un elemento y verificar si esta o no

// nombres.reverse(); //sirve para poner la lista al reves
// console.log(nombres);

/*const encontrarIndex = (array, elemento) => {
    for (let index = 0; index < array.length; index++) {
        if(array[index] === elemento){
            return index;
        }
    }
}

const nombres = ["Nico", "Viajes", "Lugares","Rutas", "yani", "maria"];
console.log(encontrarIndex(nombres, "Rutas"));
*/

/*const nombres = ["Nico", "Viajes", "Lugares","Rutas", "yani", "maria"];

const eliminar = (nombre) =>{
    let index = nombres.indexOf(nombre);

    if(index != -1){
        nombres.splice(index, 1);
    }
    console.log(nombres);
}

eliminar("Lugares");
*/

const personas = [
    {nombre: "nico", edad:35},
    {nombre: "yani", edad:33},
    {nombre: "maria", edad:15},
];

for (let i = 0; i < 2; i++){
    let nombre = prompt("ingrese el nombre del usuario");
    let edad = prompt("ingrese la edad del usuario");

    let obj = {nobre: nombre, edad: edad};
    personas.push(obj);

    // console.log(personas);
}
