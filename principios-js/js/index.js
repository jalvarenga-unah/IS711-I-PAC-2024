
// Variables 

let nombre = 'Juan'
const apellido = 'Alvarenga' // * constante
let edad = 29

nombre = 'Enrique'
// apellido = 'Gonzalez' // ! ❌ Error, no se puede reasignar una constante

// template string
console.log(`Hola ${nombre} ${apellido}, tengo ${edad} años`)

// Scope (alcance)

var correo = 'jealvarengar@unah.edu.hn'

// crea un apuntador a la variable correo
var correo = 'otro@mail.com'

console.log('global ', correo)

{
    // esto es otro Scope (Local)

    nombre = 'Pedro' // * let es de scope local
    var correo = 'interno@mail.com'

    console.log('interno', correo)
    console.log('interno', nombre)
    console.log('interno', apellido)
}

console.log('global', nombre) // * Es un scope global
console.log('global', correo)




