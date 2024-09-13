
function calculateCentury(year) {
    if(typeof year !== 'number'){

        throw new TypeError("EL AÑO DEBE SER DE TIPO NUMBER");

    }else if(year <= 0){
        throw new TypeError("AÑO NO DEBE SER MENOR O IGUAL A 0")
    }else{

        return Math.ceil(year/100);


    }
}

module.exports = {calculateCentury};
