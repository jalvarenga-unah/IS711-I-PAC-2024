const express = require('express')
const productos = require('./productos.json')

//creacion del servidor
const app = express() // equivalente a http.createServer
const PORT = process.env.PORT || 3000


// app.use((req, res, next) => {

//     if (req.method !== 'POST') next()
//     if (req.headers['content-type'] != 'application/json') next()

//     req.on('data', (chuck) => {
//         req.body += chuck.toString()
//     })

//     req.on('end', () => {
//         next()
//     })

// })

//* Middleware de express
// para capturar los datos de la petición y enviarlos al body
app.use(express.json())

//Nuestras Rutas
app.get('/', (request, response) => {
    response.send('Hola mundo desde Express')
})

app.get('/productos', (request, response) => {
    response.json(productos)
})

app.get('/productos/:id', (request, response) => {

    const { id } = request.params

    const productoId = Number(id)

    if (!productoId) {
        response.status(400).json({ error: true, message: 'Parametros invalidos' })
    }

    const producto = productos.filter(({ id }) => id === productoId)

    response.json(producto)// establece los encabezados pro default
})

app.post('/productos', (req, res) => {

    //recibir los datos del cliente
    const data = req.body //viene en formato json

    //TODO: Realizar una validación


    //agregar a la BBDDD
    productos.unshift(data)

    res.json(productos)

})

//* Middlewares

//Ruta por default donde llegaran todas las peticiones
//de las rutas que no existen
app.use((req, res, next) => {

    res.status(404).json({
        error: true,
        message: `La ruta '${req.url}' no existe`
    })
})

//asingar un puerto al servidor y empezar a escuchar
app.listen(PORT, () => {
    console.log(`Server on port http://localhost:${PORT}`)
})



