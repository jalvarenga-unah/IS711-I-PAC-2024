const a = 10
const b = undefined

const booleno = true
const lista = []
const nombre = ''

if (booleno === b) { // true == 1
    console.log('booleno es igual que b')
} else {
    console.log('booleno es diferente que b')
}

if (lista === false) {
    console.log('Se cumple')
} else {
    console.log('No se cumple')
}

if (NaN == NaN) { //! ❌ Esto no se cumple nunca
    console.log('Se cumple la condición de undefined')
}

// * diferente de: !== ó !=

if (a > b) {
    console.log('Se cumple la condición')
}