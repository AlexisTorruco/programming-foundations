// 🧾 Contexto:
// Validar si el dato recibido es un array antes de procesarlo

// 🎯 Objetivo:
// Retornar true si es array, false si no

//* SOLUCION LARGA:
// function isValidArray(data) {
//   if (Array.isArray(data)) {
//     return true;
//   } else {
//     return false;
//   }
// }

//* SOLUCION CORTA:
function isValidArray(data) {
  return Array.isArray(data);
}

// 🧪 Pruebas:
console.log(isValidArray([1, 2, 3])); // true
console.log(isValidArray("not an array")); // false
console.log(isValidArray({ key: "value" })); // false
console.log(isValidArray([])); // true
console.log(isValidArray(null)); // false
console.log(isValidArray(undefined)); // false
