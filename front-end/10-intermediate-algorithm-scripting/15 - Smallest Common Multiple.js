/*

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Smallest Common Multiple

*/

function smallestCommons(arr) {

  var rangeArray = [];

  // fill a new array with all numbers in the range from greatest to lowest
  for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    rangeArray.push(i);
  }
  
  function gcd(x, y) {    // Implements The Euclidean Algorithm
    if (y === 0)
        return x;
    else
        return gcd(y, x % y);
  }
  
  return rangeArray.reduce(function(previousValue, currentValue) {
    var gcdPrevCurr = gcd(previousValue, currentValue);
    return (previousValue * currentValue) / gcdPrevCurr;
  });
}

console.log(smallestCommons([23,18]));
