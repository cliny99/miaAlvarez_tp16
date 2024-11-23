const {importarDatosBici} = require('./datosBici');

dhBici = {
    bicicletas : importarDatosBici(),
    buscarBici : function(numId){
        const bici = this.bicicletas.filter(bici => bici.id === numId);
        return bici.length > 0 ? bici[0] : null;
    },

    venderBici : function(numId){
        const bici = this.buscarBici(numId);
        if (bici.vendida = false) { 
            return bici; 
        } else {
            return "Bicicleta no encontrada";
        }
    },

    biciParaLaVenta : function(){
        return this.bicicletas.filter(bici => !bici.vendida);
    },

    totalDeVentas: function () {
        return this.bicicletas
            .filter(bici => bici.vendida)
            .reduce((total, bici) => total + bici.precio, 0);
    }
}

// console.log(dhBici.buscarBici(7));
// console.log(dhBici.venderBici(2));
// console.log(dhBici.biciParaLaVenta());
// console.log(dhBici.totalDeVentas());