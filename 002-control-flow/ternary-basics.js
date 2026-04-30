//* 📝 Contexto:
// Un sistema necesita mostrar si un usuario tiene acceso premium o no.

//* 📌 Reglas:
/*
true → "Premium access"
false → "Basic access"
*/

//* 📋 Pseudocódigo:
//1. Crear función que reciba como parámetro un booleano que indique si el usuario tiene acceso premium o no.
//2. Manejo de errores: validar tipo de dato, si no es un booleano, retornar un mensaje de error.
//3. Utilizar un operador ternario para retornar "Premium access" si el valor es true, o "Basic access" si el valor es false.
//4. Llamar a la función con diferentes valores para verificar su funcionamiento.

function checkAccess(isPremium) {
  if (typeof isPremium !== "boolean")
    return "Error: Input must be a boolean value.";

  return isPremium ? "Premium access" : "Basic access";
}

console.log(checkAccess(true)); // Output: "Premium access"
console.log(checkAccess(false)); // Output: "Basic access"
console.log(checkAccess("yes")); // Output: "Error: Input must be a boolean value."
console.log(checkAccess(1)); // Output: "Error: Input must be a boolean value."
