const funciones = require('./funtionScisors')

test('Si se ingresan otras letras que no sean T,P o PA, lanzará error', () => {
    expect(() => funciones.letsPlay("8","d")).toThrow();
    expect(() => funciones.letsPlay("tijeras","papel")).toThrow();
    expect(() => funciones.letsPlay(1,5)).toThrow();
});

test('Si se ingresan las letras correctas, el juego funciona con todos los casos de empate', () => {
    expect(funciones.letsPlay("p","p")).toBe("Empate");
    expect(funciones.letsPlay("pA","PA")).toBe("Empate");
    expect(funciones.letsPlay("T","t")).toBe("Empate");
});

test('Si se ingresan las letras correctas, el juego funciona con todos los casos de jugador 1 ganando', () => {
    expect(funciones.letsPlay("p","t")).toBe("Jugador 1 gana");
    expect(funciones.letsPlay("pA","p")).toBe("Jugador 1 gana");
    expect(funciones.letsPlay("T","pa")).toBe("Jugador 1 gana");
});

test('Si se ingresan las letras correctas, el juego funciona con todos los casos de jugador 2 ganando', () => {
    expect(funciones.letsPlay("t","P")).toBe("Jugador 2 gana");
    expect(funciones.letsPlay("p","pa")).toBe("Jugador 2 gana");
    expect(funciones.letsPlay("PA","T")).toBe("Jugador 2 gana");
});
