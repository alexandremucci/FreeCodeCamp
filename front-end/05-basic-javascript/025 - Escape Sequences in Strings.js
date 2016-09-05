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

Instructions
Assign the following three lines of text into the single variable myStr using escape sequences.

FirstLine
\SecondLine\
ThirdLine

You will need to use escape sequences to insert special characters correctly. You will also need to follow the spacing as it looks above, with no spaces between escape sequences or words.

Here is the text with the escape sequences written out.

FirstLine newline backslash SecondLine backslash carriage-return ThirdLine

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
