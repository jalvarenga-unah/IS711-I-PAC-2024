
const app = require('node:http')
const productos = require('./productos.json')

const server = app.createServer((request, response) => {
    // write es el contenido que se va a mostrar en el navegador
    console.log('Se hizo una petición')

    // request.method  -> GET,POST,PUT,DELETE
    switch (request.method) {
        case 'GET':
            switch (request.url) {
                case '/productos':
                    response.setHeader('Content-Type', 'application/json')
                    response.statusCode = 200
                    response.write(JSON.stringify(productos))
                    break
                case '/productos/1':
                    response.setHeader('Content-Type', 'application/json')
                    response.statusCode = 200
                    const producto = productos.find(item => item.id === 1)
                    response.write(JSON.stringify(producto))
                    break
                default:
                    response.write('<h1>Esto es el home</h1>')
            }
            break// fin del case GET
        case 'POST':
            switch (request.url) {
                case '/productos':

                    //obtener de la petición el body
                    let body = ''

                    request.on('data', (chunck) => {
                        body += chunck.toString()
                    })


                    request.on('end', () => {
                        console.log(body)

                        // "guardar" el producto en la base de datos
                        productos.unshift(JSON.parse(body))
                    })

                    //tomar esos datos y guardarlos en la base de datos


                    //enviar una respuesta al cliente
                    response.setHeader('Content-Type', 'application/json')
                    response.statusCode = 201
                    response.write(JSON.stringify({ message: 'Producto creado' }))
                    break
                default:
                    response.write('<h1>Esto es el home</h1>')
            }
            break
        default:
            response.write('<h1>Metodo no permitido</h1>')
    }





    response.end() // para indicar que ya terminamos de enviar la respuesta
})

//TODO: usar dotenv para cargar las variables de entorno
const port = process.env.PORT || 3000

server.listen(port, () => {

    // const { port } = server.address()

    console.log(`Servidor ejecutandose en: http://localhost:${port}`)
})
