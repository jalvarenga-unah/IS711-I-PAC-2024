
console.log('promesas.js')


//? Posibles estados de las promesas

//?  1. Pendiente -> la tarea se está ejecutando
//*  2. Resuelta -> la tarea se ejecutó correctamente y se llamó a la función "resolve"
//!  3. Rechazada -> la tarea no se ejecutó correctamente y se llamó a la función "reject"


const miPromesa = () => {

    console.log('Ejecutando la promesa')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hola mundo')
        }, 2000)

    })

    // return 'Hola mundo' // El valor que espero que retorne la promesa
}


const resultadoPromesa = miPromesa()

resultadoPromesa
    .then((resultado) => {
        console.log(resultado)
    }).catch((error) => {
        console.log(error)
    }).finally(() => {
        console.log('Promesa terminada')
    })

console.log('fin del programa')

// resultadoPromesa //❌ no puedo operar directamete con el resultado de la promesa

// console.log(Number('rg'))
const validarNumero = (valor) => {

    return new Promise((resolve, reject) => {

        if (Number(valor) || valor === 0) {
            resolve('Es un número')
        }

        reject('No es un número')

    })
}

const resolverPromesaAsincrona = async () => {

    console.log('Ejecutando la promesa asincrona')
    try {
        const resultado = await validarNumero('otra cosa') // Espera a que la promesa se resuelva

        console.log(resultado)
        console.log('Fin de la promesa asincrona')
    } catch (error) {
        console.log(error)
    }

}

resolverPromesaAsincrona()

// validarNumero('otra cosa').then(resultado => {
//     console.log(resultado)
// }).catch(error => {
//     console.log(error)
// })