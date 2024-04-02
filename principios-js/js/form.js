
//? 1. Obtener la referencia al formulario
const form = document.querySelector('#form_registro')

//? 2. Capturar el evento submit del formulario
form.addEventListener('submit', (event) => {

    //? 2.1 Prevenir la recarga de la pagina
    // evita la funcion por defecto del formulario
    event.preventDefault()

    //? 3. Obtener los valores de los inputs del formulario
    const formData = new FormData(form)

    const data = Object.fromEntries(formData)

    //? 3.1 Validar los datos del formulario
    if (!data.correo.includes('@gmail.com')) {
        alert('El correo debe ser de Gmail')
        return
    }

    //? 4. Enviar los datos del formulario a un servidor
    console.log(data)

})

const botonMensaje = document.querySelector('#btn_mensaje')

const mostrarMensaje = () => {
    alert('Hola desde la funcion')

}

// function mostrarMensaje() {
//     alert('Hola desde la funcion')
// }


botonMensaje.addEventListener('mouseover', () => {
    alert('pasó el mouse por encima del boton')
})
// botonMensaje.addEventListener('click', mostrarMensaje)

const input = document.querySelector('#input')

input.addEventListener('keyup', (e) => {

    console.log(e.keyCode)
    if (e.keyCode === 13) {

        console.log('Presiono la tecla enter')

    }

})