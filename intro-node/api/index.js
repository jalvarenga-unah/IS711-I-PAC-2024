const express = require('express')
const productos = require('./productos.json')

//creacion del servidor
const app = express() // equivalente a http.createServer
const PORT = process.env.PORT || 3000

app.get('/', (request, response) => {
    response.send('Hola mundo desde Express')
})

app.get('/productos', (request, response) => {
    response.json(productos)
})

app.get('/productos/:id', (request, response) => {

    const { id } = request.params

    console.log(request.params)

    const producto = productos.filter(producto => producto.id == id)

    response.json(producto)

})


//asingar un puerto al servidor y empezar a escuchar
app.listen(PORT, () => {
    console.log(`Server on port http://localhost:${PORT}`)
})



