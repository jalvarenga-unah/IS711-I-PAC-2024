const express = require('express')
const productos = require('./productos.json')
const { validarProducto } = require('./schemas/product')
const cors = require('cors')

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
app.disable('x-powered-by') // deshabilitar la cabecera de express

// Middleware para habilitar CORS
// Habilito al API, para que pueda recibir peticiones cualquier origen (dominio)
app.use(cors({
    origin: [
        'http://127.0.0.1:5500',
        'https://midomino.com',// dominio de produccion
        'https://dev.midomino.com' // dominio de desarrollo
    ]
}))

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
    let data = req.body //viene en formato json

    //validar los datos
    const validacion = validarProducto(data)

    if (validacion.success) {
        //agregar a la BBDDD

        data = {
            id: Date.now(), //generar un id unico, viene de la BBDD
            ...data
        }

        productos.unshift(data)
        res.status(201).json(productos)
    } else {
        res.status(400).json({
            error: true,
            message: 'Datos invalidos'
        })
    }
})

app.delete('/productos/:id', (req, res) => {

    //codigo necesario para buscar el produto y eliminarlo de la lista
})

app.put('/productos/:id', (req, res) => {

    //codigo necesario para buscar el producto y actualizarlo

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



