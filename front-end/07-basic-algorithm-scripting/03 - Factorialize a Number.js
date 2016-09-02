function factorialize(num) {
  var factorial = 1;
  for (i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}

console.log(factorialize(5));