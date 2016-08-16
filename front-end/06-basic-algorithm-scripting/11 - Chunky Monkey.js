function chunkArrayInGroups(arr, size) {
  var newArray = [];
  
  for (var i = 0; i < arr.length; i += size) {
    newArray.push(arr.slice(i, size + i));
  }  
  
  return newArray;        
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
