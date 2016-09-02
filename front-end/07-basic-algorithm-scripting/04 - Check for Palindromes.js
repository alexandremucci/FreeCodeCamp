function palindrome(str) {
  var cleanStr = str.replace(/[\W_]/g,"").toLowerCase();
  var reversedStr = cleanStr.split("").reverse().join("");
  return cleanStr === reversedStr;
}

console.log(palindrome("eye"));