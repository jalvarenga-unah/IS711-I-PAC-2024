console.log('estructuras.js')


const lista = [] // * Array / Lista 
const objeto = {} // * Objeto / Mapa / Diccionario


lista.push(1)
lista.push(2)
lista.push(3)
lista.push('ABC')
lista.push('DEF')

result = lista.pop() // * Elimina el último elemento y lo retorna
// console.log(result)
lista.shift() // * Elimina el primer elemento y lo retorna
lista.unshift('ABC') // * Agrega un elemento al inicio


const indexABC = lista.indexOf('ABC', 1) // * Busca el índice de un elemento
// console.log('indexABC', indexABC)

// console.log('lista', lista.length, lista)

// for (let i = 0; i < lista.length; i++) {
//     console.log('lista', i, lista[i])
// }

// lista.forEach(
//     (item, index) => {
//         console.log(index, item)
//     }
// )// fin forEach

// console.log(typeof lista[0])
// console.log(Number(lista[0]))

for (const item of lista) {

    if (!Number(item)) {
        console.log('desde el item', item)
        console.log('desde la lista', lista[lista.indexOf(item)])

        // delete lista[lista.indexOf(item)]// 

        lista.splice(lista.indexOf(item), 1)
    }

    // console.log(item)
}

console.log('lista', lista)

const numeros = [1, 2, 3, 10]

numeros.splice(numeros.length - 2, 1)

console.log(numeros)

// objetos

//? clave - valor
const persona = {
    'apellido': 'Alvarenga',
    'nombre': 'Juan',
    'edad': 29,
    'nacionalidad': ['Honduras', 'Guatemala'],
    'direccion': {
        'ciudad': 'SPS',
        'departamento': 'Cortés',
        'residencia': 'Honduras',
        'coordenadas': {
            'latitud': 123,
            'longitud': 456
        }
    }
}

// * modificar un valor
persona.nombre = 'Enrique'

// * agregar una propiedad
persona.esMayor = persona.edad > 18

// * eliminar una propiedad
delete persona.edad

// console.log(persona)
// console.log(persona.edad ?? 'No existe la edad')
// console.log(persona.direccion.coordenadas.longitud)

// console.log(Object.entries(persona))

// * iterar un objeto
for (const [key, value] of Object.entries(persona)) {
    console.log(key, value)
}

// * acceder a las claves del objeto
// console.log(Object.keys(persona.direccion))

//? Desestructuración

const nombre = 'Pedro Perez'

// * alias a las variables
const { nombre: nombrePersona, apellido } = persona

// const nombrePersona = persona.nombre

// const nombre = persona.nombre
// const apellido = persona.apellido

console.log(nombrePersona, apellido)