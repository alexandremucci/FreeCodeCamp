/*

Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

For Loops
Array.prototype.push()

*/

function sumPrimes(num) {
  var sieve  = [];
  var primes = [];
  
  for (var i = 2; i <= num; i++) {
    if (!sieve[i]) {
      primes.push(i);
      
      for (var j = i * 2; j <= num; j += i) {
        sieve[j] = true;
      }
    }  
  }
  
  return primes.reduce(function(a,b) {
     return a + b; 
  });
}

console.log(sumPrimes(100000)); 