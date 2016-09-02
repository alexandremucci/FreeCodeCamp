/*

Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Boolean Objects
Array.prototype.filter()

*/

function bouncer(arr) {
  /* The Boolean object is an object wrapper for a boolean value.
     If value is omitted or is 0, -0, null, false, NaN, undefined, 
     or the empty string (""), the object has an initial value of 
     false. All other values, including any object or the string 
     "false", create an object with an initial value of true. 
  */
  return arr.filter(Boolean);
}

console.log(bouncer([7, "ate", "", false, 9]));
