
// Ejercicio 1: Contar la cantidad de palabras en un texto
// Implementa la función 'contarPalabras' que reciba un texto y devuelva la cantidad de palabras que contiene.
// Considera que las palabras están separadas por espacios y puede haber signos de puntuación.

function contarPalabras(texto) {
    // Tu código aquí

    return texto.split(' ').length
}

contarPalabras('Hola esto es una prueba'); // 5

// Ejercicio 2: Calcular el promedio de notas
// Implementa la función 'calcularPromedioNotas' que reciba un arreglo de objetos que representan estudiantes.
// Cada estudiante tiene una propiedad 'nombre' (string) y 'notas' (arreglo de números).
// La función debe devolver un nuevo objeto que contenga el nombre del estudiante y el promedio de sus notas.

// EJEMPLO:
// const estudiantes = [{nombre: "Juan",notas: [98, 96, 87, 88],},{nombre: "María",notas: [94, 95, 86, 87]}];
// Valor de Retorno
// [{nombre: "Juan", promedio: 92.25},{nombre: "María", promedio: 90.5}]

function calcularPromedioNotas(estudiantes) {
    // Tu código aquí
    const promedios = []

    for (const estudiante of estudiantes) {

        const { nombre, notas } = estudiante

        let promedio = 0
        let suma = 0

        for (let contador = 0; contador < notas.length; contador++) {
            suma = suma + notas[contador]
        }

        promedio = suma / notas.length

        promedios.push({
            'nombre': nombre,
            'promedio': promedio
        })
    }

    return promedios
}


function calcularPromedioNotas2(estudiantes) {
    // Tu código aquí
    const promedios = []

    for (const estudiante of estudiantes) {

        const { nombre, notas } = estudiante

        let promedio = notas.reduce((acumuladora, actual) => acumuladora + actual, 0) / notas.length

        promedios.push({
            'nombre': nombre,
            'promedio': promedio
        })
    }

    return promedios
}


function calcularPromedioNotas3(estudiantes) {
    // Tu código aquí
    return estudiantes.map(({ nombre, notas }) => ({
        nombre,
        'promedio': notas.reduce((acumuladora, actual) => acumuladora + actual, 0) / notas.length
    }))
}

const estudiantes = [{ nombre: "Juan", notas: [98, 96, 87, 88], }, { nombre: "María", notas: [94, 95, 86, 87] }];
console.log(calcularPromedioNotas3(estudiantes))

// Ejercicio 3: Encontrar duplicados
// Implementa la función 'encontrarDuplicados' que reciba un arreglo de números y devuelva un nuevo arreglo
// con los números que se repiten en el arreglo original.

function encontrarDuplicados(numeros) {
    // Tu código aquí
    const duplicados = []
    const coicidencias = {}

    //recorro el arreglo de numeros
    //para saber cuales son los duplicados
    for (const valor of numeros) {
        if (coicidencias[valor]) {
            coicidencias[valor]++
        } else {
            coicidencias[valor] = 1
        }
    }

    //recorro el objeto de coicidencias
    //para crear un arreglo con los duplicados 
    //los que aparecen mas de una vez
    for (const valor in coicidencias) {
        if (coicidencias[valor] > 1) {
            duplicados.push(valor)
        }
    }
    return duplicados
}

const numeros = [1, 1, 8, 2, 2, 3, 4, 4];
console.log(encontrarDuplicados(numeros))