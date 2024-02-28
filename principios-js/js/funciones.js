// TODO: para ver con un empaquetador
// 'use strict'
console.log('funciones.js')


// saludar2 = 'Hola' // ❌ Eliminando la referencia a la función

//ejecuto la función
console.log(saludar2())

// definición de una función
function saludar2() {
    return 'Hola mundo'
}


// argumentos posicionales
const saludar = (nombre, { edad = 'sin edad', apellido }) => {
    return `Hola ${nombre} ${apellido} ${edad}`
}

const datos = {
    nombre: 'Juan',
    edad: 29,
    apellido: 'Alvarenga',
}

console.log(saludar('Enrique', datos))

