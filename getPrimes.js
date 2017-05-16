function getPrimes(n) {
  let array = [];
  let a;
  let primeNumbers = [];
  if (Number.isInteger(n)) {
    if (n < 0)
      return "Negative numbers not allowed";
  else if (n > 0) {
    for (a = 2; a <= n; a++) {
      if (!array[a]) {
      primeNumbers.push(a);
    for (b = a; b <= n; b += a) 
      array[b] = true;
        }
      }
            return primeNumbers;
    } 
    else if (n === 0) 
      return array;
  } 
    else 
      return "Invalid input"
}