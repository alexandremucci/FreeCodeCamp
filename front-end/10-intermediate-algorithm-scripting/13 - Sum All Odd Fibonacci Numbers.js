/*

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Remainder

*/

function sumFibs(num) {
  var previousValue   = 1;
  var currentValue    = 1;
  var nextValue       = 2; // starts two (sum of the first two elements of the sequence)
  var sumOddFibNumber = 2; // starts two (sum of the first two elements of the sequence - both are odd)
  
  while (nextValue <= num) {
    if (nextValue % 2 !== 0) {
      sumOddFibNumber += nextValue;
    }
    previousValue = currentValue;
    currentValue = nextValue;
    nextValue = previousValue + currentValue;
  }
  
  return sumOddFibNumber;
}

sumFibs(123);