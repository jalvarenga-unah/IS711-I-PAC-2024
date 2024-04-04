const fs = require('node:fs')

const fsp = require('node:fs/promises')

console.log('Leyendo el archivo 1:')
fs.readFile('archivo1.txt', 'utf-8', (error, contenido) => {
    console.log(contenido)
})


console.log('Quiero hacer otras cosas por mientras...')


console.log('Leyendo el archivo 2:')
fs.readFile('archivo2.txt', 'utf-8', (error, contenido) => {
    console.log(contenido)
})

console.log('Quiero hacer mas !!!!!! cosas por mientras...')