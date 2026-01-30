//ToDo: **** Map Method ****
//* The map() method creates a new array populated with the results of calling a provided function on every element in the calling array. */

function multiplyByTwo(numbers) {
  return numbers.map((num) => num * 2);
  //   return numbers.map(function(num) {
  //     return num * 10;
  //   })
}

console.log(multiplyByTwo([1, 10, 30]));
