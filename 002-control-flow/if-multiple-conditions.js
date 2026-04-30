//* 📝 Contexto:
// Un sistema clasifica usuarios por edad para mostrar contenido personalizado.

//* 📌 Reglas:
/*
< 13 → "Child"
13 - 17 → "Teen"
18 - 64 → "Adult"
65+ → "Senior"
*/

//* 📋 Pseudocódigo:
//1. Crear función que reciba la edad del usuario.
//2. Evaluar la edad con condiciones (if-else) para determinar la categoría del usuario y retornar el mensaje correspondiente.
//3. Llamar a la función con diferentes edades para verificar su funcionamiento.

function classifyAge(age) {
  if (typeof age !== "number" || Number.isNaN(age)) {
    return "Invalid data. It must be a number.";
  }

  if (age <= 0) return "Invalid age. Age must be greater than 0 years.";

  if (age < 13) {
    return "Child";
  } else if (age >= 13 && age <= 17) {
    return "Teen";
  } else if (age >= 18 && age <= 64) {
    return "Adult";
  } else {
    return "Senior";
  }
}

//? VERSION OPTIMIZADA:
/*
function classifyAge(age) {
if (typeof age !== "number" || Number.isNaN(age)) return "Invalid data. It must be a number.";

if (age <= 0) return "Invalid age. Age must be greater than 0 years.";

if (age < 13 ) return "Child";
if (age < 18) return "Teen";
if (age < 65) return "Adult";
return "Senior";

}

*/

console.log(classifyAge(10)); // Child
console.log(classifyAge(15)); // Teen
console.log(classifyAge(30)); // Adult
console.log(classifyAge(70)); // Senior
console.log(classifyAge("twenty")); // Invalid data. It must be a number.
console.log(classifyAge(NaN)); // Invalid data. It must be a number.
console.log(classifyAge(-5)); // Invalid age. Age must be greater than 0 years.
