//ToDo: **** Reduce Method ****
//* The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. */

function sumArray(arr) {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
  // return arr.reduce(function(accumulator, currentValue) {
  //     return accumulator + currentValue;
  // }, 0);
}

console.log(sumArray([1, 2, 3, 4, 10]));
