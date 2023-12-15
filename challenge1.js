// andy problem1

function decreaseBy(num) {
  let count = 0;
  let newArray = [];
  for (i = num; i < 5; i = i + 1) {
    newArray[count] = i;
    count = count + 1;
  }
  console.log(newArray);
}

decreaseBy(10);

// andy problem2

function printNumbers(a, b) {
  if (a > b) {
    for (i = b; i <= a; i++) {
      console.log(i);
    }
  } else
    for (i = a; i <= b; i++) {
      console.log(i);
    }
}

printNumbers(10, 6);

// andy problem3

function abcArray(a, b, c) {
  let count = -1;
  let newArray = [];
  for (i = a; i <= b; i = i + c) {
    count = count + 1;
    newArray[count] = i;
  }
  console.log(newArray);
}
abcArray(2, 10, 1);

// prime numbers

function is_prime_number(n) {
  let count = 0;
  for (i = 1; i <= n; i++) {
    if (n % i == 0) {
      count = count + 1;
    }
  }
  if (count == 2) {
    return true;
  } else {
    return false;
  }
}

// 5, 7, 11, 13, 17;

// result = is_prime_number(17);
// console.log(result);

// find prime numbers

function find_prime_numbers(min, max) {
  let prime_numbers = [];
  let count = 0;
  for (i = min; i <= max; i = i + 1) {
    console.log("i:", i);
    if (is_prime_number(i) == true) {
      prime_numbers[count] = i;
      count = count + 1;
    }
  }
  return prime_numbers;
}

prime_array = find_prime_numbers(3, 20);
console.log(prime_array);

// create new arrays of array from long text

let randomText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

function toArrays(Text) {
  let firstArray = [];
  firstArray = Text.split(" ");
  let secondArray = [];
  for (let c = 0; c < Math.floor(firstArray.length / 8); c++) {
    secondArray[c] = [];
    for (let i = 0; i < 8; i++) {
      let z = c * 8 + i;
      if (z < firstArray.length) {
        secondArray[c][i] = firstArray[z];
      }
    }
  }
  return secondArray;
}
let result = toArrays(randomText);
console.log(result);

testValue1 = Math.floor(3.9);
testValue2 = Math.ceil(3.4);
console.log(testValue1);
console.log(testValue2);

// test update

// ogogdson sondgoi too

// 1, 3, 5, 7, 9
