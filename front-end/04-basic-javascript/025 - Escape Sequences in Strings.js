/*

Quotes are not the only characters that can be escaped inside a string. Here is a table of common escape sequences:

Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	backspace
\f	form feed

Note that the backslash itself must be escaped in order to display as a backslash.

*/

var myStr = "FirstLine\n\\SecondLine\\\rThirdLine";

// That's the answer for codeCamp challenge
console.log("FreeCodeCamp answer:");
console.log(myStr);

// If you want to see the answer as it appears on the page, write this way
myStr = "FirstLine\n\\SecondLine\\\nThirdLine";

console.log("");
console.log("Each word in one line:");
console.log(myStr);
