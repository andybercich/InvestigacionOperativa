const funciones = require("./pinValidation");

test("Un pin con una letra debe de retornar false", () => {
  expect(funciones.pinValidation("147s")).toBe(false);
});

test("Un pin con menos de 4 digitos debe devolver false", () => {
  expect(funciones.pinValidation("147")).toBe(false);
});
test("Un pin con más de 6 digitos debe retornar false", () => {
  expect(funciones.pinValidation("1477455")).toBe(false);
});
test("Un pin con 4 digitos y sin letras retornará true", () => {
  expect(funciones.pinValidation("5821")).toBe(true);
});
test("Un pin con 5 digitos y sin letras retornará true", () => {
  expect(funciones.pinValidation("14778")).toBe(true);
});
test("Un pin con 6 digitos y sin letras retornará true", () => {
  expect(funciones.pinValidation("14778")).toBe(true);
});