// 🧾 Contexto real: Un sistema recibe diferentes tipos de datos y necesita validar si los datos de entrada cumplen con ciertos criterios antes de procesarlos.

/* 🎯 Objetivo:

Debe retornar:

"Valid number"
"Valid string"
"Valid array"
"Invalid input"

*/

//1. Declarar función para validar el parametro de entrada
function validateInput(input) {
  //2. Validar si el input es un número
  if (typeof input === "number" && !Number.isNaN(input)) {
    return "Valid number";
  } else if (typeof input === "string" && input.trim() !== "") {
    //3. Validar si el input es una cadena de texto
    return "Valid string";
  } else if (Array.isArray(input)) {
    //4. Validar si el input es un arreglo
    return "Valid array";
  } else {
    //5. Si el input no es ninguno de los tipos anteriores, retornar "Invalid input"
    return "Invalid input";
  }
}

//6. Llamar a la función para validar
console.log(validateInput(42)); // "Valid number"
console.log(validateInput("Hello")); // "Valid string"
console.log(validateInput([1, 2, 3])); // "Valid array"
console.log(validateInput({ key: "value" })); // "Invalid input"
