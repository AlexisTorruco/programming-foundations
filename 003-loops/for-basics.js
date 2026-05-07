//* Estructura del for:
/*

for (inicio; condición; incremento){
--> código a ejecutar
}

*/

//* 🧾 Contexto:
// Un sistema necesita imprimir IDs temporales del 1 al 5 para validar secuencias.

//* 🎯 Objetivo:
/*
ID: 1
ID: 2
ID: 3
ID: 4
ID: 5
*/

//* 📋 Pseudocódigo:
//1. Crear funcion para imprimir IDs temporales
//2. Usar un bucle for para iterar del 1 al 5
//3. Imprimir el ID temporal en cada iteración
//4. Llamar a la función para ejecutar el código

function printTemporaryIDs() {
  for (let i = 1; i <= 5; i++) {
    console.log(`ID: ${i}`);
  }
}

printTemporaryIDs();
