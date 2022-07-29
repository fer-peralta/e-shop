const cargaProductos = (datos)=> {
    fetch(datos)
    .then((response)=> response.json())
    .then((data)=> { 
            contenidoJSON = data
            contenidoJSON.forEach(contenido => {
                let div = document.createElement('div')
                div.className = 'producto'
                div.innerHTML = `<div>
                                    <div class="card h-100 w-100 row gx-5">
                                    <img src="${contenido.img}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${contenido.nombre}</h5>
                                        <p class="card-text">$${contenido.precio}</p>
                                        <a href="#" id="btn${contenido.id}"><i class="fa-solid fa-cart-plus"></i></a>
                                    </div>
                                    </div>
                                </div>`
            
                contenedorProductos.appendChild(div)
                let btnAgregar = document.getElementById(`btn${contenido.id}`)

                btnAgregar.addEventListener("click", () =>{
                    agregarCarrito(contenido.id)
            })
        })    
    })
}

function agregarCarrito (id) {

    let agregarProducto = productos.find(item => item.id === id)
    carrito.push(agregarProducto)
    mostrarCarrito (agregarProducto)
    actualizarCarrito()
    
    Toastify({

        text: "Producto agregado al carrito",
        duration: 2000
                
        }).showToast();
}

function mostrarCarrito (agregarProducto) {

    let div = document.createElement("div")
    div.className = "productoCarrito"
    div.innerHTML = `<p>${agregarProducto.nombre}</p>
                    <p>Precio: $${agregarProducto.precio}</p>
                    <button id="eliminar${agregarProducto.id}" class="btnEliminar"><i class="fa-solid fa-trash-can"></i></button>`
    contenedorCarrito.appendChild(div)

    let btnEliminar = document.getElementById(`eliminar${agregarProducto.id}`)
    btnEliminar.addEventListener("click", () =>{
        btnEliminar.parentElement.remove()
        carrito = carrito.filter(el => el.id !== agregarProducto.id) /* pisar carrito anterior */
        actualizarCarrito()        
    })

}

function actualizarCarrito () {

    contadorCarrito.innerText = carrito.length
    totalCompra = precioTotal.innerText = carrito.reduce((acum, el) => acum + el.precio, 0)

}
