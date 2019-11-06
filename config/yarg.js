let opt = {
    base: {
        demand: true, //quiere decir q es obligatoria este parametro
        alias: 'b',
        description: 'la base de la tabla de multiplicar'
    },
    limite: {
        alias: 'l',
        default: 10,
        description: 'la base de la tabla de multiplicar'
    }
}
const argv = require('yargs')
    .command('crear', 'crea un archivo con la tabla de multiplicar', opt)
    .command('listar', 'lista un archivo con la tabla de multiplicar', opt)
    .help()
    .argv;

module.exports = {
    argv
};