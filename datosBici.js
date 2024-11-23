const {readFileSync} = require('fs');

function importarDatosBici(){
    const datos = readFileSync('./bicicletas.json');
    return JSON.parse(datos);
}

// console.log(importarDatosBici());
module.exports = {importarDatosBici};