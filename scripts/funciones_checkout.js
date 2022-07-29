function obtenerJson () {

    const datosUsuario = JSON.parse(localStorage.getItem("datosUsuario"))
        inputEmail.value = datosUsuario.email
        inputNombre.value = datosUsuario.nombre
        inputApellido.value = datosUsuario.apellido
        selectProvincia.value = datosUsuario.provincia
        inputLocalidad.value = datosUsuario.localidad
        inputCalle.value = datosUsuario.calle

}

function guardarDatos () {

    const datosUsuario = {  email: inputEmail.value,
                            nombre: inputNombre.value, 
                            apellido: inputApellido.value,
                            provincia: selectProvincia.value, 
                            localidad: inputLocalidad.value, 
                            calle: inputCalle.value 
    }
    
    let str = JSON.stringify(datosUsuario)
    localStorage.setItem("datosUsuario", str)
    
}

document.addEventListener("submit", (e)=>{
    e.preventDefault()

   logueado? guardarMensaje () : recuperarMensaje()

})

function recuperaDatos () {

    localStorage.getItem("datosUsuario") && obtenerJson ()

}

function guardarMensaje (){

    guardarDatos ()

    let h3 = document.createElement('h3')
    h3.innerHTML = `<h3 class="success">En breve envíaremos tu pedido ${inputNombre.value}</h3>`
    formDatos.appendChild(h3)
    console.log("formulario enviado")

}

function recuperarMensaje (){

    formDatos.setAttribute("class","row g-3 mt-3")
    login.setAttribute("class","d-none")
    logueado = true
    recuperaDatos ()

}



