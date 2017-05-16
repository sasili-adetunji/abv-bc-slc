/* A function to generate prime numbers of numbers from 0 to n

Programmed by Sasiliyu Adetunji
Andela Abuja Bootcamp Self Leearning Clinic
Date: 15 May, 2017.

*/
function getPrimes(n) {
  let emptyArray = [];
  let a;
  let primeNumbers = [];
  if (Number.isInteger(n)) {
    // to check for negative numbers
   if (n < 0)
      return "Error: Negative numbers not allowed";
    // to check for positive numbers greater than 0
    else if (n > 0) {
      // a = 2 since prime numbers starts from 2
     for (a = 2; a <= n; a++) {
        let notPrime = false;
        for (let i = 2; i <= a; i++){
          if (a % i === 0 && i !==a )
            notPrime = true;
        }
    if (notPrime === false)
        primeNumbers.push(a);
      }
    return primeNumbers;
    } 
    else if (n === 0) 
      return emptyArray;
  } 
  // to check for other input types like strings
  else 

    return "Error : Invalid input";
}
