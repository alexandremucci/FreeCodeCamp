/*

Flatten a nested array. You must account for varying levels of nesting.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.isArray()

*/

function steamrollArray(arr) {
  // I'm a steamroller, baby
  var flattenedArray  = [];
  
  function flatArray(nestedArray) {
    nestedArray.forEach(function(value) {
      if (Array.isArray(value)) {
        flatArray(value);
      } else {
        flattenedArray.push(value);
      }
    });    
  }

  flatArray(arr);
  
  return flattenedArray;
}

steamrollArray([1, [2], [3, [[4]]]]);


