
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