/*

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.prototype.push()
Array.prototype.slice()

*/

function chunkArrayInGroups(arr, size) {
  var newArray = [];
  
  for (var i = 0; i < arr.length; i += size) {
    newArray.push(arr.slice(i, size + i));
  }  
  
  return newArray;        
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
