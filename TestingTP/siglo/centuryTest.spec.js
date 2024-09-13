const funciones = require("./calculateCenturyFunction");

test('Si ingresamos un valor no numérico, retornará un error', () => {

    expect(() => funciones.calculateCentury("8")).toThrow();
});

test('Si ingresamos un valor numérico menor o igual a 0, retornará un error', () => {

    expect(() => funciones.calculateCentury(0)).toThrow();
    expect(() => funciones.calculateCentury(-8)).toThrow();
});

test('Si ingresamos un valor numérico mayor a cero, no retornara en que siglo se encuentra dicho año', () => {

    expect(funciones.calculateCentury(10)).toBe(1);
    expect(funciones.calculateCentury(801)).toBe(9);
    expect(funciones.calculateCentury(2001)).toBe(21);
    expect(funciones.calculateCentury(2250)).toBe(23);
});