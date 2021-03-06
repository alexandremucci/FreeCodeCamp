/*

We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Math.max()
Math.min()
Array.prototype.reduce()

*/

function sumAll(arr) {
  var minNumber = Math.min.apply(null, arr);
  var maxNumber = Math.max.apply(null, arr);
  
  // Sum integers from Min to Max
  // Take the average of the first number and the last number, and multiply by the number of numbers.
  return (maxNumber - minNumber + 1) * (minNumber + maxNumber) / 2;
}

console.log(sumAll([1, 4]));