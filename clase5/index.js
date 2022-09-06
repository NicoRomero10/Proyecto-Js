// PARA CREAR UN OBJETO

/*function Producto(img, precio, nombre){
    this.imagen = img;
    this.precio = precio;
    this.nombre = nombre;
}

const producto1 = new Producto("http", 406000, "base...");
const producto2 = new Producto("httpbase", 74500, "basedoble");

console.log(producto1);
console.log(producto2);
*/

// CUANDO SON MUCHOS DATOS PARA EL OBJETO

/*function Producto(info){
    this.imagen = info.img;
    this.precio = info.precio;
    this.nombre = info.nombre;
    this.descripcion = info.descripcion;
    this.color = info.color;
    this.alto = info.alto;
}

const producto1 = new Producto({
    img: "TV",
    precio: 120000,
    nombre: "Tv Led Smart",
    descripcion: "pantalla led 4k",
    color: "negro",
    alto: "16 cm",
})

console.log(producto1);
*/

// EL METODO QUE MAS SE USA

/*class Persona {
    constructor(nombre, edad, direccion) {
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
    }

    hablar(){
        console.log("Hola soy " + this.nombre);
    }
}

const persona1 = new Persona("Nico", 35, "Libano 3140");
persona1.hablar();
*/

class Destinos {
    constructor(info) {
        this.lugar = info.lugar;
        this.hotel = info.hotel;
        this.servicio = info.servicio;
        this.cantidad = info.cantidad
    }

    vender(){
        this.cantidad = this.cantidad -1;
        if (this.cantidad === 0){
            console.log("No hay mas lugares disponibles");
        }
    }
}

const destinos1 = new Destinos({
    lugar: "Punta Cana",
    hotel: "5 estrellas",
    servicio: "All Inclsive",
    cantidad: 3,

});

console.log(destinos1);
destinos1.vender();
console.log(destinos1);
destinos1.vender();
console.log(destinos1);
destinos1.vender();

// destinos1.vender();
// const destinos2 = new Destinos("Rios de Janeiro", "4 estrellas", "Media Pension");
// destinos1.hablar();