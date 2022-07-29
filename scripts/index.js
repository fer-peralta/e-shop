let carrito = []

const contenedorProductos = document.getElementById("contenedorProductos")
const contenedorCarrito = document.getElementById("contenedorCarrito")
const contadorCarrito = document.getElementById("contadorCarrito")

let contenidoJSON = []
const db = "scripts/productos.json"

let totalCompra = 0

cargaProductos (db)