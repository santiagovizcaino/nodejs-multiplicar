const fs = require('fs'); //se crea una constante 

let crearTabla = (base, limite) => {



    for (let i = 1; i <= 10; i++) {
        console.log(`${base} * ${i} = ${base * i}\n`);
    }



}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        //validar que sea un numero
        if (!Number(base)) {
            reject(`el valor introducido ${base} no es un numero`)
            return;
        }
        let data = '';
        for (let j = base; j <= limite; j++) {
            console.log(j);
            for (let i = 1; i <= 10; i++) {
                data += `${j} * ${i} = ${j * i}\n`;
            }


            fs.writeFile(`./tablas/tabla-${j}-al-${limite}.txt`, data, (err) => { //el(err)=> es el callback
                if (err)
                    reject(err);
                else
                    resolve(`tabla-${j}-al-${limite}.txt`);
            })
        };
    });
}

module.exports = {
    crearArchivo, //si el nombre de la propieda es igual al valor se puede dejar solo con el nombre  
    crearTabla
};