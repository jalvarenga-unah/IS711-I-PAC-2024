// CommonJs
function suma(a, b) {
    return a + b
}

function resta(a, b) {
    return a - b
}

//exportando la función suma, como un módulo
module.exports = {
    suma,
    resta
}