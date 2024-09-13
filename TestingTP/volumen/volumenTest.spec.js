const funciones = require("./funcionesVolumen");


//Funcion Principal
test("La funcion si recibe parametros con tipos de datos incorrectos, retornará un error", () => {
    expect(() => funciones.calculateCapacityTank("s","7","M")).toThrow()
  });


test("La funcion si recibe parametros con tipos de datos incorrectos, retornará un error", () => {
    expect(() => funciones.calculateCapacityTank(5,8,14)).toThrow()
});

test("La funcion si recibe una unidad distinta a M o CM retornará un error", () => {
    expect(() => funciones.calculateCapacityTank(8,9,"hm")).toThrow()
  });

test("La funcion con estos parámetros en m retornará cierto número de litros", () => {
    expect(funciones.calculateCapacityTank(8,9,"m")).toBe(508938.01);
});
test("La funcion con estos parámetros en cm retornará cierto número de litros", () => {
    expect(funciones.calculateCapacityTank(8,9,"cm")).toBe(0.51);
});

//Funcion meterToLiter


test("La funcion con este valor de metros cubicos, retornará este valor", () => {
    expect(funciones.meterToLiter(47850)).toBe(47850000);
});

test("La funcion con este valor de metros cubicos, retornará este valor", () => {
    expect(funciones.meterToLiter(354)).toBe(354000);
});

test("La funcion con este valor de metros cubicos, retornará este valor", () => {
    expect(funciones.meterToLiter(1)).toBe(1000);
});

test("La funcion con este valor de metros cubicos, retornará este valor", () => {
    expect(funciones.meterToLiter(47)).toBe(47000);
});

test("La funcion con este valor de metros cubicos, retornará este valor", () => {
    expect(funciones.meterToLiter(7)).toBe(7000);
});

//centimeterToLiter

test("La funcion con este valor de centimetros cubicos, retornará este valor", () => {
    expect(funciones.centimeterToLiter(47850)).toBe(47.85);
});

test("La funcion con este valor de centimetros cubicos, retornará este valor", () => {
    expect(funciones.centimeterToLiter(354)).toBe(0.35);
});

test("La funcion con este valor de centimetros cubicos, retornará este valor", () => {
    expect(funciones.centimeterToLiter(10)).toBe(0.01);
});

test("La funcion con este valor de centimetros cubicos, retornará este valor", () => {
    expect(funciones.centimeterToLiter(47)).toBe(0.05);
});

test("La funcion con este valor de metros cubicos, retornará este valor", () => {
    expect(funciones.centimeterToLiter(758)).toBe(0.76);
});
