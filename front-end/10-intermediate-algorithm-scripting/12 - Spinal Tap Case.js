/*

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

RegExp
String.prototype.replace()

*/

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  
  var regExpUpperCase = /(?!^)([A-Z])/g; // all uppercase letters except at the beginning of the sentence
  var regExpSpaceUnderline = /[_\s]+(?=[a-zA-Z])/g; // underline and space, but only before a-z or A-Z
  
  return str.replace(regExpUpperCase,' $1')
            .replace(regExpSpaceUnderline,'-')
            .toLowerCase();
}

spinalCase('This Is Spinal Tap');