/*

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Comparison Operators
Array.prototype.slice()
Array.prototype.filter()
Array.prototype.indexOf()
Array.prototype.concat()

*/

function diffArray(arr1, arr2) {
  var newArray = arr1.concat(arr2);
  
  function symmetricDifference(val) {
    if (arr1.indexOf(val) < 0 || arr2.indexOf(val) < 0) {
      return val;
    }
  }

  return newArray.filter(symmetricDifference);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);