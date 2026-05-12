//* 🧾 Contexto real:
// Un sistema necesita buscar un producto agotado y detener la búsqueda cuando lo encuentre.

//*🎯 Objetivo:

/*
Tienes este array:
const products = ["Laptop", "Mouse", "Keyboard", "Monitor"];

usar for...of
buscar "Keyboard"
imprimir:
Product found: Keyboard
detener loop con break

*/

//* 📋 Pseudocódigo:
/*
1.Crear función que reciba un array de productos.
2.Validar que el parametro sea un array.
3.Crear un loop for...of para iterar sobre el array.
4.Validar que cada valor del array sea un string.
5.Validar que el valor del array sea igual a "Keyboard".
6.Si se encuentra "Keyboard", imprimir "Product found: Keyboard" y detener el loop con break.
7.Si no se encuentra "Keyboard", imprimir "Product not found: [product name]".
8.Llamar la función con un array de ejemplo y mostrar el resultado.

*/

function findProduct(products) {
  if (!Array.isArray(products))
    return console.log("Invalid input: Expected an array of products.");

  let productFound = false; //Flag/Bandera

  for (const product of products) {
    if (typeof product !== "string")
      return console.log(`Invalid product: ${product}. Expected a string.`);

    if (product === "Keyboard") {
      productFound = true;
      console.log(`Product found: ${product}`);
      break;
    }
  }
  if (!productFound) console.log(`Product Keyboard not found in the list.`);

  return;
}

findProduct(["Laptop", "Mouse", "Keyboard", "Monitor"]);
findProduct("not an array");
findProduct(["Laptop", 123, "Monitor"]);
findProduct(["Laptop", "Mouse", "Monitor"]);
