/*

Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

Remember, you can access object properties through either dot notation or [] notation.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

*/

function truthCheck(collection, pre) {
  var linCounter = 0;
  
  for (var index in collection) {
    // All collections need to have the predicate property and its value needs to be equals true
    if (collection[index].hasOwnProperty(pre) && Boolean(collection[index][pre]) === true) {
      linCounter++;
    }
  }

  return (linCounter === collection.length) ? true : false;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");