
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

            const lista = document.createElement('ul')
            // data = [producto1, producto2, producto3, ...]
            // data.forEach(producto => {

            for (let a = 0; a < data.length; a++) {

                const { title, description, image } = data[a]

                const li = document.createElement('li')

                // creo los elementos HTML
                const h2 = document.createElement('h2')
                const p = document.createElement('p')
                const img = document.createElement('img')

                // asigno los valores a los elementos HTML
                h2.textContent = title
                p.textContent = description
                img.src = image
                image.alt = title
                img.width = 100

                const section = document.createElement('section')
                section.append(img, h2, p)

                li.appendChild(section)

                lista.appendChild(li)

            }


            // section.appendChild(img)
            // section.appendChild(h2)
            // section.appendChild(p)

            //agregarlos al DOM
            document.body.appendChild(lista)



        }).catch((error) => {
            console.log(error)
        })
}


// getData({ url })