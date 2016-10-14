/*

Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Roman Numerals
Array.prototype.splice()
Array.prototype.indexOf()
Array.prototype.join()

*/

function convertToRoman(num) {
  var result  = '';
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman   = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  
  for (var i = 0; i <= decimal.length; i++) {
    while (num % decimal[i] < num) {     
      result += roman[i];
      num -= decimal[i];
    }
  }
  
  return result;
}

convertToRoman(3999);