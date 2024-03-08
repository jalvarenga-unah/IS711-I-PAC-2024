
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
            // * un array de objetos, quiero ver, solo los que tenga la categoria 'jewelery'


            // for (let a = 0; a < data.length; a++) {
            //     console.log(data[a])
            // }

            // const listJewelery = []

            // data.forEach(producto => {

            //     const { category } = producto

            //     if (category == 'jewelery')
            //         listJewelery.push(producto)
            // });

            const objeto = {
                productos: data,
                rating: 4,
            }

            console.log(getProductsByRating(objeto))

            // retorna una nueva lista, que cumpla con la condición aplicada
            const listJewelery = data.filter(({ category, price }) => {

                // const { category, price } = element

                // const category = element.category
                // const price = element.price

                return category == 'jewelery' && price < 100
            })

            console.log(listJewelery)
        }).catch((error) => {
            console.log(error)
        })
}

const getProductsByRating = ({ productos, rating }) => {

    //devolver los productos >= al rating enviado

    return productos.filter(({ rating: { rate } }) => {
        return rate >= rating
    })

}

// getData({ url })