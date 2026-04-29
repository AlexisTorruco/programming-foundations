// 🧾 Contexto: Un endpoint recibe un array con datos mixtos (strings, null, NaN, etc.)
// y necesitamos sumar solo los números válidos antes de guardarlos en la base de datos.

function sumValidNumbers(arr) {}

function isValidNumber(value) {
  return typeof value === "number" && !Number.isNaN(value);
}

//TODO: TERMINAR CODIGO!!!!!!!!!!!!!!!!!!!!
