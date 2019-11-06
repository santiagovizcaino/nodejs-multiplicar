const fs = require('fs'); //se crea una constante 


let data = '';
let base = 5;
for (let i = 1; i <= 10; i++) {
    data += `${base} * ${i} = ${base * i}\n`;
}

console.log(module);

fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => { //el(err)=> es el callback
    if (err) throw err;
    console.log(`el archivo tabla-${base}.txt ha sido guardado!`);
});