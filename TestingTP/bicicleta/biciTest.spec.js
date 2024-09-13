const funciones = require("./funcionesBicicleta")

test('Si ingresamos un valor no numérico, retornará un error', () => {

    expect(() => funciones.calculateLiters("5")).toThrow();
});

test('Si ingresamos un valor numérico negativo, retornará un error', () => {
    expect(() => funciones.calculateLiters(-5)).toThrow();
});

test('Si ingresamos un valor numérico igual a 0, retornará un error', () => {
    expect(() => funciones.calculateLiters(0)).toThrow();
});

test('Con estos datos, la funcion debe retornar valores redondeados hacia el numero menor más cercano', () => {
    expect(funciones.calculateLiters(7)).toBe(3);
});

test('Con estos datos, la funcion debe retornar valores redondeados hacia el numero menor más cercano', () => {
    expect(funciones.calculateLiters(9.8)).toBe(4);
});

