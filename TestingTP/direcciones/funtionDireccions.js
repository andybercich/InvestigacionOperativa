
let dataJson = {
    street:	"tfyt",
    number: 8,
    floor_apartment: 'null',    //No necesario
    zip_codeyes:	10,
    tow:	null,             //No necesario
    city: "string",
    provinceyes:"string"
}

function validateDirections(dataJson) {

    let format = `Field\t\t\tRequired\t\tType
street\t\t\tyes\t\t\tstring
number\t\t\tyes\t\t\tnumber
floor_apartment\t\tno\t\t\tstring
zip_code\t\tyes\t\t\tnumber
town\t\t\tno\t\t\tstring
city\t\t\tyes\t\t\tstring
province\t\tyes\t\t\tstring`;
    if(typeof dataJson.street !== 'string' || typeof dataJson.number !== 'number' || typeof dataJson.zip_codeyes !== 'number' || typeof dataJson.city !== 'string' || typeof dataJson.provinceyes !== 'string' ){

        throw new TypeError("EL FORMATO DE ENTRADA DEL JSON ES ESTE:\n "+ format)
        

    }else if((dataJson.floor_apartment && typeof dataJson.floor_apartment !== 'string') || 
    (dataJson.tow && typeof dataJson.tow !== 'string')){

        throw new TypeError("LOS VALORES DE 'floor_apartment' y 'tow' SON OPCIONALES(o sea pueden ser Null), PERO SI SE GUARDAN DEBEN SER DE TIPO STRING " )

    }else{

        return 'Se ha guardado correctamente';

    }
}

console.log(validateDirections(dataJson))
module.exports={validateDirections}