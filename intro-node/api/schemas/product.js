const z = require('zod')

const productSchema = z.object({
    title: z.string().min(10),
    price: z.number({
        required_error: "El precio es requerido",
        invalid_type_error: "El precio debe ser un número",
    }).positive(),
    description: z.string().min(20),
    category: z.string().nullish(),
    image: z.string().url(),
})

const validarProducto = (producto) => {
    return productSchema.safeParse(producto)
}

module.exports = {
    validarProducto
}