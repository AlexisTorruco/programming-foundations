//* 1. VERSION SEPARADA (SEPARATE VERSION)
// function processNumber(numbers) {
//   const filteredNumbers = numbers.filter((num) => num > 10);
//   const transformedNumbers = filteredNumbers.map((num) => num * 2);
//   const total = transformedNumbers.reduce((acc, num) => acc + num, 0);
//   return total;
// }

// console.log("Versión separada: " + processNumber([4, 12, 7, 20, 3]));

//* 2. VERSION ENCADENADA (CHAINED VERSION)
// function filterMapReducePractice(numbers) {
//   return numbers
//     .filter((num) => num > 10)
//     .map((num) => num * 2)
//     .reduce((acc, num) => acc + num, 0);
// }

// console.log(
//   "Versión encadenada: " + filterMapReducePractice([4, 12, 7, 20, 3]),
// );

//* 3. VERSION SEPARADA CON OBJETOS (VERSION WITH OBJECTS)

const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 50, inStock: false },
  { name: "Keyboard", price: 80, inStock: true },
  { name: "Monitor", price: 300, inStock: true },
];

function processProducts(products) {
  const inStockProducts = products.filter((product) => product.inStock);
  const prices = inStockProducts.map((product) => product.price);
  const totalPrice = prices.reduce((acc, price) => acc + price, 0);
  return totalPrice;
}

console.log("Total price of in-stock products: " + processProducts(products));
