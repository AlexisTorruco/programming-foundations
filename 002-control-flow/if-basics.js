//* 📝 Contexto:
// Un sistema debe verificar si un usuario es mayor de edad para permitirle acceso.

//* 📌 Reglas:
/*
    Si edad >=18 -> "Access granted"
    Si no -> "Access denied"
*/

//* 📋 Pseudocódigo:
//1. Crear la función que evaluará la edad y retornará el mensaje correspondiente
//2. Crear condiciones para evaluar la edad ( if-else ) y retornar el mensaje adecuado
//3. Llamar a la función para validar la edad del usuario

function checkAge(age) {
  if (age >= 18 && typeof age === "number" && !isNaN(age)) {
    return "Access granted";
  } else {
    return "Access denied";
  }
}

console.log(checkAge(9));
console.log(checkAge(18));
console.log(checkAge(25));
console.log(checkAge(17));
