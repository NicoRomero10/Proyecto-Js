//EJEMPLO DEL PROFE

let contenedor = document.getElementById("contenedor");
let productos = [
  { id: 1, nombre: "camisa", precio: 1000, status: "disponible" },
  { id: 2, nombre: "zapato", precio: 700, status: "no disponible" },
  { id: 3, nombre: "pantalon", precio: 1300, status: "disponible" },
  { id: 4, nombre: "gorra", precio: 100, status: "no disponible" },
];

let precio = parseInt(prompt("Ingrese el precio minimo"));
let productosFiltrados = productos.filter(item => item.precio > precio && item.status === "disponible");

for (const producto of productosFiltrados) {
  let item = document.createElement("div");
  item.innerHTML = `<h2>ID: ${producto.id}</h2>
                    <p>Producto: ${producto.nombre}</p>
                    <b>$${producto.precio}</b>`;

  contenedor.append(item);
}
