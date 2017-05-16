/* A function to generate prime numbers of numbers from 0 to n

Programmed by Sasiliyu Adetunji
Andela Abuja Bootcamp Self Leearning Clinic
Date: 15 May, 2017.

*/

function getPrimes(n) {
  let emptyArray = [];
  let a;

  // variable primeNumbers will hold the array of the generated prime Numbers
  let primeNumbers = [];

  // to check for integer numbers as input
  if (Number.isInteger(n)) {

    // to check for negative numbers and return an error message
    if (n < 0)
      return "Error: Negative numbers not allowed";

  // to check for positive numbers greater than 0
    else if (n > 0) {

    // a is initialized to 2 because prime number starts from 2
    // return array of number between 0 and n
    for (a = 2; a <= n; a++) {
      if (!emptyArray[a]) {
      primeNumbers.push(a);
    for (b = a; b <= n; b += a) 
      emptyArray[b] = true;
        }
      }
    return primeNumbers;
    } 
    // to check for 0 as an input and return an empty array
    else if (n === 0) 
      return emptyArray;
  } 
  // to check for other input types like strings
  else 

    return "Invalid input"
}