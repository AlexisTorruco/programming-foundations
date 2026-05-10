//* 🧾 Contexto real:
// Un sistema de inventario necesita imprimir el nombre de cada producto disponible.

//* 🎯 Objetivo:

/*
Crear una función que:

1. reciba un array de strings
2. valide que sea array
3. use for...of
4. imprima cada producto
*/

//* 📋 Pseudocódigo:
/*
1. Crear función printProducts que reciba un parámetro products
2. Validar si products es un array, si no lo es, imprimir mensaje de error y salir de la función
3. Usar un bucle for...of para iterar sobre cada producto en products
4. Imprimir el nombre de cada producto
5. Llamar a la función printProducts con un array de productos para probar su funcionamiento
*/

function printProducts(products) {
  if (!Array.isArray(products))
    throw new Error("Valor inválido. Se espera un array de productos.");

  for (const product of products) {
    if (typeof product !== "string")
      throw new Error("Valor inválido. Se espera un array de strings.");

    console.log(product);
  }
}

printProducts(["Manzana", "Banana", "Naranja"]);
printProducts("No es un array"); // Esto lanzará un error
printProducts(["Manzana", 123, "Naranja"]); // Esto lanzará un error
