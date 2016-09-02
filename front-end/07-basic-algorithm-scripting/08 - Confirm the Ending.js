function confirmEnding(str, target) {
  return str.substr(str.length - target.length) === target;
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("He has to give me a new name", "name"));