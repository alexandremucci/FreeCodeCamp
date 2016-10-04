/*

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.prototype.charCodeAt()
String.fromCharCode()

*/

function fearNotLetter(str) {
  // create an array with all letters sorted alphabetically
  var tempArr = str.toLowerCase().split('').sort();
  
  // get the code from the first letter
  var presentLetter = tempArr[0].charCodeAt(0);
  var missingLetter;
  
  // iterate through the array and check if the next letter represent the
  // next number in the numerical sequence
  for (var i = 1; i < tempArr.length; i++) {
      if (tempArr[i].charCodeAt(0) > ++presentLetter) {
          missingLetter = String.fromCharCode(presentLetter);
          break;
      }
  }

  return missingLetter;
}

console.log(fearNotLetter("aBce"));