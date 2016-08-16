function findLongestWord(str) {
  var sortedArray = str.split(" ").sort(function(current,next){
    return current.length < next.length;
  });
  return sortedArray[0].length;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
  
  