/*

Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.prototype.indexOf()
Array.prototype.push()
Array.prototype.join()
String.prototype.substr()
String.prototype.split()

*/

function translatePigLatin(str) {
  var regExpVowel = /[aeiou]/ig; // regular expression to match only vowels
  var pigLatin = '';
  
  if (regExpVowel.test(str[0])) {
    // if first letter is a vowel, just add 'way'
    pigLatin = str + 'way';
  } else {
    // find first vowel index
    var fvIndex = str.indexOf(str.match(regExpVowel)[0]);
    
    // create the new string: (part from the vowel until the end) + (the part before the vowel) + 'ay'
    pigLatin = str.substr(fvIndex) + str.substr(0,fvIndex) + 'ay';
  }
  
  return pigLatin;
}

translatePigLatin("blgorithm");