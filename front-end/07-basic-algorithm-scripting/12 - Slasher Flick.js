function slasher(arr, howMany) {
  return arr.splice(howMany, arr.length);
}

console.log(slasher([1, 2, 3], 2));
