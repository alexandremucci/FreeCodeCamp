function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  
  // unnecessary, but c9 raise a warning without it
  var i = 0;
  var j = 0;
  
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];      
    }
  }
  
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);