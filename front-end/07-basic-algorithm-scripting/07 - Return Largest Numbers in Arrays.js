/*

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Comparison Operators

*/

function largestOfFour(arr) {
  var larLargestNumbers = [];
  
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      if ((larLargestNumbers[i] < arr[i][j]) || (larLargestNumbers[i] == undefined)) {
          larLargestNumbers[i] = arr[i][j];
      }      
    }
  }
  
  return larLargestNumbers;
  
  // You can also use the line below. But, notice that arrow functions are not supported in many browsers yet. 
  // So, be careful before to use this approach.
  //return arr.map((list) => list.reduce((a, b) => a > b ? a : b));
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
