
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

            const lista = document.querySelector("#lista_productos")
            let body = ''
            data.forEach(producto => {

                const { title, description, image, price } = producto

                body += ` 
                <div class="col-4">
                    <div class="card" style="width: 18rem;">
                        <img src="${image}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${title} - <span class='text-success'>$${price}</span> </h5>
                        <p class="card-text">${description}</p>
                        </div>
                    </div>
                </div>`
            });

            lista.innerHTML = body

            document.body.appendChild(lista)


        }).catch((error) => {
            console.log(error)
        })
}


getData({ url })