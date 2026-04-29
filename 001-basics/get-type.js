// 🧾 Contexto real: Un sistema recibe diferentes tipos de datos y necesita identificar qué tipo de dato es para procesarlo correctamente.

//1. Crear una función que reciba un valor y devuelva su tipo de dato utilizando el operador `typeof`.

function getType(value) {
  //2. validar el tipo de dato y si es null, devolver "null" en lugar de "object" y si es un array, devolver "array" en lugar de "object"
  if (value === null) {
    return "null";
  } else if (Array.isArray(value)) {
    return "array";
  } else {
    return typeof value;
  }
}

//3. llamar a la función:
console.log(getType(42)); // "number"
console.log(getType("Hello")); // "string"
console.log(getType(true)); // "boolean"
console.log(getType({ name: "Alice" })); // "object"
console.log(getType([1, 2, 3])); // "array"
console.log(getType(null)); // "null"
console.log(getType(undefined)); // "undefined"
console.log(getType(function () {})); // "function"
