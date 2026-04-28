//ToDo: **** Filter Method ****
//* The filter() method creates a new array with all elements that pass the test implemented by the provided function. */

let numbersArray = [1, 10, 30, 100, 9];

function calculateTotal(numbers) {
  return numbers.filter((numeros) => numeros > 10);
  //   return numbers.filter(function(numeros) {
  //     return numeros > 10;
  //   })
}

console.log(calculateTotal([1, 10, 8, 10, 9]));
// console.log(calculateTotal([1, 10, 30, 100, 9]));
// calculateTotal([1, 10, 30, 100, 9]);
