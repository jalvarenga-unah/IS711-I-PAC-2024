const persona = {
    'apellido': 'Alvarenga',
    'nombre': 'Juan',
    'edad': 29,
    'nacionalidad': ['Honduras', 'Guatemala'],
    'direccion': {
        'ciudad': 'SPS',
        'departamento': 'Cortés',
        'residencia': 'Honduras',
        'coordenadas': {
            'latitud': 123,
            'longitud': 456
        }
    }
}

// const latitud = 1.23123

const { ciudad, coordenadas } = persona.direccion

const { latitud, longitud } = coordenadas

// console.log(ciudad, latitud, longitud)

const saludar = ({ longitud, edad, nombre, latitud }) => {
    console.log(nombre, edad * 4, latitud)
}

const { nombre, edad } = persona

const data = {
    latitud: 1.2314,
    longitud: 42342,
    nombre,
    edad,
}

saludar(data)