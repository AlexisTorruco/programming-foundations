//* 🧾 Contexto real:
// Un sistema debe procesar IDs de usuarios, pero ignorar IDs inválidos.

//* 🎯 Objetivo:
/*
Tienes este array:
const ids = [101, 102, null, 103, undefined, 104];

👉 Usa:
for...of
continue
*/

//* 🧠 Reglas:
/*
Si el valor NO es number:

👉 imprimir:
Invalid ID skipped

y usar:
continue;

Si sí es válido:

👉 imprimir:
Processing ID: X
*/

//* 📋Pseudocódigo:
/*
1. Crear función que reciba un array de IDs.
2. Validar que el parámetro sea un array.
3. Crear un bucle for...of para iterar sobre cada valor del array.
4. Validar si el valor es un número.
5. Si no es un número, imprimir "Invalid ID skipped" y usar continue.
6. Si es un número, imprimir "Processing ID: X".
7. Llamar a la función con el array de IDs.
*/

function processIDs(ids) {
  if (!Array.isArray(ids)) return console.log("Input must be an array");

  for (const id of ids) {
    if (typeof id !== "number" || Number.isNaN(id)) {
      console.log("Invalid ID skipped");
      continue;
    }
    console.log(`Processing ID: ${id}`);
  }

  return "Processing complete";
}

console.log(processIDs([101, 102, null, 103, undefined, 104]));
