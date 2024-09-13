
function calculateCapacityTank(heigth, diameter, units) {
   if(typeof heigth !== 'number' || typeof diameter !== 'number' || typeof units !== 'string'){

        throw new TypeError("LOS PARAMETROS DE ALTURA Y DIAMETRO DEBEN SER TE TIPO NUMBER, Y EL PARAMETRO DE UNITS DE TIPO STRING");
    } else if(heigth<=0 || diameter<=0){
        throw new TypeError("NO SE PUEDE INGRESAR UN DIAMETRO O ALTURAS MENORES O IGUALES A 0");
        
    }
    
    if(units.toUpperCase() == "M"){

        return meterToLiter(heigth*Math.pow(diameter/2,2)*Math.PI)

    }else if(units.toUpperCase() == "CM"){

        return centimeterToLiter(heigth*Math.pow(diameter/2,2)*Math.PI);

    }else{
        throw new TypeError("UNITS DEBE SER CM O M")
    }

}

function meterToLiter(meters) {
    
    return parseFloat((meters*1000).toFixed(2));

}

function centimeterToLiter(centimeters) {
    return parseFloat((centimeters/1000).toFixed(2));
}


module.exports={calculateCapacityTank,meterToLiter,centimeterToLiter}
