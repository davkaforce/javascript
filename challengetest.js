//is prime number

function is_prime_number(n) {
  if (n == 1) {
    return false;
  }
  if (n == 2) {
    return true;
  }
  if (n % 2 == 0) {
    return false;
  }
  let isPrime = true;
  for (let i = 3; i <= n / 2; i = i + 2) {
    if (n % i == 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}

// 5, 7, 11, 13, 17;

result = is_prime_number(1011);
console.log(result);

// find prime numbers

function find_prime_numbers(min, max) {
  let prime_numbers = [];
  let count = 0;
  for (let i = min; i <= max; i = i + 1) {
    if (is_prime_number(i) == true) {
      prime_numbers[count] = i;
      count = count + 1;
    }
  }
  return prime_numbers;
}

prime_array = find_prime_numbers(3, 100);
console.log(prime_array);

// alternative solution

// sum of odd numbers to n

// n + ((n + 1 - 2) / 2) ** 2;

function sumOfOdd(n) {
  if (n == 1) {
    return 1;
  }
  if (n > 1) {
    n = n - 1;
  }
  return sumOfOdd((n / 2) ** 2) + n;
}

let result = sumOfOdd(9);
console.log(result);
