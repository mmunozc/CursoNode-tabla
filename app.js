const {crearArchivo} = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

console.clear();

/* const [ , , arg3 = 'base=5']= process.argv;
const [ , base = 1] = arg3.split('=');
console.log(base);
 */


//const base = 5;

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.yellow, 'creado'))
    .catch(err => console.log(err))