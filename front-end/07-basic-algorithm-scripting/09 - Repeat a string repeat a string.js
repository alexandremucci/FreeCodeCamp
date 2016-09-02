function repeatStringNumTimes(str, num) {
  return num > 0 ? str.repeat(num) : "";
}

console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("abc", -2));
