//* 🧾 Contexto real:
// Un sistema necesita imprimir los nombres de usuarios registrados.

//* 🎯 Objetivo:
/*
Crear una función que:

1. reciba un array de nombres
2. valide que sea array
3. use for
4. imprima cada nombre

*/

//* 📋 Pseudocódigo:
/*
1. Crear función con un parámetro que reciba un array de nombres
2. Validar que el valor recibido en el parámetro sea un array
3. Usar un bucle for para iterar sobre el array
4. Validar que cada elemento del array sea una cadena de texto
5. Imprimir cada nombre
6. Llamar la función con un array de ejemplo y mostrar el resultado
*/

function printNames(names) {
  if (!Array.isArray(names)) return "Error: El valor debe ser un array";

  for (let i = 0; i < names.length; i++) {
    if (typeof names[i] !== "string")
      return "Error: El array debe contener solo cadenas de texto";

    console.log(names[i]);
  }
}

printNames(["Alex", "Juan", "Maria"]);
printNames("not an array");
printNames(["Alex", 123, "Maria"]);
