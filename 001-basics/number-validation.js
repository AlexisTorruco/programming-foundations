// 🧾 Contexto:
// Validar si un valor es un número válido antes de usarlo en cálculos

// 🎯 Objetivo:
// Retornar true si es número válido, false si no

function isValidNumber(value) {
  if (typeof value === "number" && Number.isNaN(value) === false) { //Number.isNaN(123) => false, Number.isNaN(NaN) => true
    return true;
  } else {
    return false;
  }
}

function shortIsValidNumber(value) {
  return typeof value === "number" && !Number.isNaN(value);
}

// 🧪 Pruebas:
console.log(isValidNumber(123)); // true
console.log(isValidNumber("123")); // false
console.log(isValidNumber(NaN)); // false
console.log(shortIsValidNumber(123)); // true
console.log(shortIsValidNumber("123")); // false
console.log(shortIsValidNumber(NaN)); // false
