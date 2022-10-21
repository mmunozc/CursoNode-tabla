const colors = require('colors');

const fs = require('fs');

const crearArchivo = async(base, listar = false, hasta=10) => {

    try {

        
        let salida = '';

        for (let i = 1; i <= hasta; i++) {
            var result = base*i;
            salida += `${base} x ${i} = ${result}\n`;
        }


        if (listar === true) {
            console.log('============================'.green);
            //console.log(`       Tabla del : ${base}`);
            console.log('       Tabla del :', base);
            console.log('============================'.green);   
            console.log(salida);
        }


        fs.writeFileSync(`./output/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error 
    }
}

module.exports = {
    crearArchivo
}


