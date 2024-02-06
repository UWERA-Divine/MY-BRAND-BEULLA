function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function filterPrimes(numbers) {
  const primeNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    let isPrimeNumber = true;

    if (numbers[i] <= 1) {
      isPrimeNumber = false;
    } else {
      for (let j = 2; j < numbers[i]; j++) {
        if (numbers[i] % j === 0) {
          isPrimeNumber = false;
          break;
        }
      }
    }

    if (isPrimeNumber) {
      primeNumbers.push(numbers[i]);
    }
  }

  return primeNumbers;
}

const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultArray = filterPrimes(inputArray);

console.log(resultArray);
