const fs = require('node:fs')


console.log('Leyendo el archivo 1:')
const contenido1 = fs.readFileSync('archivo1.txt', 'utf-8')
console.log(contenido1)

console.log('Quiero hacer otras cosas por mientras...')


console.log('Leyendo el archivo 2:')
const contenido2 = fs.readFileSync('archivo2.txt', 'utf-8')
console.log(contenido2)

console.log('Quiero hacer mas !!!!!! cosas por mientras...')