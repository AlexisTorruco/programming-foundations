//* 🧾 Contexto real:
//Un sistema necesita calcular el total de ventas del día a partir de un array de montos.

//* 🎯 Objetivo:
/*

Crear una función que:

1. reciba un array de números
2. use un bucle for
3. sume todos los valores
4. retorne el total

*/

//* 📋 Pseudocódigo:
/*
1. Crear una función con un parámetro que reciba un array de números
2. Validar que el valor recibido en el parametro sea un array y que contenga solo números
3. Crear una variable para almacenar la suma total, inicializada en 0
4. Usar un bucle for para iterar sobre el array y sumar cada valor
5. Retornar la suma total
6. Llamar la función con un array de ejemplo y mostrar el resultado

*/

function sumSales(sales) {
    if (!Array.isArray(sales)) return "Error: El valor debe ser un array";

  let total = 0;

  for (let i = 0; i < sales.length; i++) {
    if (typeof sales[i] !== "number")
      return "Error: El array debe contener solo números";
    
    if (Number.isNaN(sales[i]))
      return "Error: El array no debe contener NaN";

    total += sales[i];
  }

  return total;
}

console.log(sumSales([100, 200, 300]));
console.log(sumSales([50, 100, "200"]));
console.log(sumSales("not an array"));
console.log(sumSales([100, 200, NaN]));
