function mutation(arr) {
  return arr[1].toLowerCase().split('').every(function(value) {
      return arr[0].toLowerCase().split('').indexOf(value) !== -1;
  });
}

console.log(mutation(["hello", "hey"]));
