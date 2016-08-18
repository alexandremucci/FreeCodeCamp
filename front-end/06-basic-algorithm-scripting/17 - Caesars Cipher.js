/*

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

*/

function rot13(str) { 
  function reciprocalCipher(code) {
      code += 13;
      return code > 90 ? String.fromCharCode(code -= 26) : String.fromCharCode(code);
  }

  return str.split('').map(function(char) {
    return char.match(/([A-Z])/g) ? reciprocalCipher(char.charCodeAt(0)) : char;
  }).join('');
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("FREE CODE CAMP"));
