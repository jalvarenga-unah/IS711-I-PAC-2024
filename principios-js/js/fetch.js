
// los metodos de http
// * GET, POST, PUT, PATCH, DELETE


// codigos de estado
//? 100 - 199 -> informativos
//* 200 - 299 -> exito
//? 300 - 399 -> redirecciones
//! 400 - 499 -> errores del cliente
//! 500 - 599 -> errores del servidor

//consumir los recursos de una api
const url = 'https://fakestoreapi.com/products'


const getData = ({ url }) => {
    //API de JavaScript para hacer peticiones HTTP
    fetch(url)
        .then((response) => {

            if (response.status !== 200) {
                //genera una excepcion
                throw new Error('Error al obtener los datos')
            }

            return response.json()
        }).then((data) => {
            console.log(data)
        }).catch((error) => {
            console.log(error)
        })
}

getData({ url })