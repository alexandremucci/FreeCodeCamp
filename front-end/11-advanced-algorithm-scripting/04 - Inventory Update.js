function updateInventory(arr1, arr2) {

  // list of unique values
  var setList = new Set();

  // fill the list using current inventory values
  arr1.map(function(item) {
    setList.add(item[1]); 
  });    

  // iterate over the new inventory and add values wich don't exist on current inventory 
  arr2.map(function(item) {
    if (!setList.has(item[1])) {
        arr1.push([0,item[1]]);
    }  
  });

  // update item quantities (arr1 = curInv)
  arr1.map(function(item1) {
    return arr2.map(function(item2) {
      if (item1[1] === item2[1]) {
        item1[0] = item1[0] + item2[0]; 
      }
    });
  });

  // Sort the array alphabetically 
  arr1.sort(function(currItem, nextItem) {
    return currItem[1] > nextItem[1] ? 1 : -1;
  });

  return arr1;    
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));

