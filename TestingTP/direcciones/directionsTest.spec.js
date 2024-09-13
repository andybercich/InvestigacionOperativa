const funciones = require('./funtionDireccions');



test('Si se ingresan los datos incorrectos, se lanzará error', () => {
    let dataJson = {
        street:	null,
        number: "number",
        floor_apartment: "string",    //No necesario
        zip_codeyes:	8,
        tow:	"string",             //No necesario
        city: "8",
        provinceyes:"string"
    }
    expect(() => funciones.validateDirections(dataJson)).toThrow();
    let dataJson2 = {
        street:	"null",
        number: "number",
        floor_apartment: NaN,    //No necesario
        zip_codeyes:	"8",
        tow:	"string",             //No necesario
        city: "asd",
        provinceyes:"string"
    }
    expect(() => funciones.validateDirections(dataJson2)).toThrow();
    

})

test('Si se ingresan los datos correctos, se guardará correctamente', () => {

    let dataJson = {
        street:	"null",
        number: 4,
        floor_apartment: "string",    //No necesario
        zip_codeyes:	8,
        tow:	"string",             //No necesario
        city: "8",
        provinceyes:"string"
    }

    expect(funciones.validateDirections(dataJson)).toBe("Se ha guardado correctamente");
    let dataJson2 = {
        street:	"Flow",
        number: 78,
        floor_apartment: null,    //No necesario
        zip_codeyes:	8,
        tow:	null,             //No necesario
        city: "Skyline",
        provinceyes:"L.A."
    }
    expect(funciones.validateDirections(dataJson2)).toBe("Se ha guardado correctamente");
});

