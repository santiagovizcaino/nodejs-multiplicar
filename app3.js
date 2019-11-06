const { argv } = require('./config/yarg')
const colors = require('colors')

const { crearArchivo, crearTabla } = require('./multiplicacion/multiplicar'); //adquiere cada una de las funciones

let comando = argv._[0] ///_propio del archivo

console.log(argv);

switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}.green`))
            .catch(e => console.log(e.red));
        break;
    case 'listar':
        crearTabla(argv.base, argv.limite);
        break;
    default:
        console.log("comando no valido!");
}