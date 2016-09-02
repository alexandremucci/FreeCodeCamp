/*

Return the length of the longest word in the provided sentence.

Your response should be a number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.split()
String.length

*/

function findLongestWord(str) {
  var sortedArray = str.split(" ").sort(function(current,next){
    return current.length < next.length;
  });
  return sortedArray[0].length;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
  
  