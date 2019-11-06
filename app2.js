//importacion simple
//const multiplicar = require('./multiplicacion/multiplicar'); //se crea una constante 
//importacion con destruccturacion
const { crearArchivo } = require('./multiplicacion/multiplicar'); //adquiere cada una de las funciones

//con expresiones regulares
// let regex = /(\d+)/g;
// let base = process.argv[2].match(regex);

let parametro = process.argv[2];
let base = parametro.split('=')[1];

//importacion simple
// multiplicar.crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(e => console.log(e));

//destructuracion
crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));