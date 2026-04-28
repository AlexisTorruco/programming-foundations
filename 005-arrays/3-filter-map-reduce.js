//* Necesitamos calcular el total de productos disponibles en inventario, pero ignorando los productos sin precio válido.
//TODO: Aplicar buenas prácticas; pseudocódigo, comentarios, nombres descriptivos, etc.

const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: null, inStock: true },
  { name: "Keyboard", price: 80, inStock: false },
  { name: "Monitor", price: 300, inStock: true },
];

function calculateTotalInventoryValue(products) {
  //1. Filtrar los productos que tienen un precio válido (no nulo)
  const validPriceProducts = products.filter(
    (product) =>
      product.inStock &&
      typeof product.price === "number" &&
      !Number.isNaN(product.price),
  );
  //2. Obtener el precio de cada producto filtrado
  const prices = validPriceProducts.map((product) => product.price);
  //3. Sumar los precios para obtener el valor total del inventario
  const totalInventoryValue = prices.reduce((total, price) => total + price, 0);
  //4. Retornar el valor total del inventario
  return totalInventoryValue;
}

//5. Llamar a la función y mostrar el resultado
console.log(`Total inventory value: ${calculateTotalInventoryValue(products)}`);
