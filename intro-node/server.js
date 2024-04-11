
const app = require('node:http')

const server = app.createServer((request, response) => {
    // write es el contenido que se va a mostrar en el navegador
    response.write('<h1>Hola mundo desde Node Js</h1>')
    response.end() // para indicar que ya terminamos de enviar la respuesta
})

//TODO: usar dotenv para cargar las variables de entorno
const port = process.env.PORT || 3000

server.listen(port, () => {

    // const { port } = server.address()

    console.log(`Servidor ejecutandose en: http://localhost:${port}`)
})
