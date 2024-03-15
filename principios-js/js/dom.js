
//? Referenciar elementos del DOM

const titulo = document.querySelector('h1')

// cambiar el texto del titulo
titulo.textContent = 'Hola Mundo'
titulo.style.color = 'red'
titulo.style.fontSize = '50px'

const parrafo = document.querySelector('p')
const parrafos = document.querySelectorAll('p') //Lista de nodos (elementos HTML)

parrafos.forEach(parrafo => {
    parrafo.style.color = 'blue'
})

const parrafoImportante = document.querySelector('#ultimoParrafo')

console.log(parrafo.textContent)
console.log(parrafos[1].textContent)

// parrafoImportante.style.display = 'none'

console.log(parrafoImportante.textContent)

//? Crear elementos del DOM

const h2 = document.createElement('h2')
h2.textContent = 'Elemento creado desde JS'
h2.style.color = 'green'

const span = document.createElement('span')
span.textContent = ' Soy un span creado desde JS'

// titulo.appendChild(span) //! No se puede reutilizar el elemento

h2.appendChild(span)

document.body.appendChild(h2)

// document.getElementById('ultimoParrafo')
