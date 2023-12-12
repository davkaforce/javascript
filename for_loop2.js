let products = [
  { name: "iphone", price: 2000.1, category: "electronic", stock: 20 },
  { name: "laptop", price: 8300.1, category: "electronic", stock: 5 },
  { name: "laptop", price: 22600.1, category: "electronic", stock: 5 },
  { name: "chair", price: 9500.1, category: "non-electronic", stock: 5 },
];

function findByExpensive() {
  let expensive = products[0].price;
  for (let i = 0; i < 4; i++) {
    if (expensive < products[i].price) {
      expensive = products[i].price;
    }
  }
  console.log(expensive);
}
findByExpensive();

// average score

let player = {
  name: "John",
  age: 20,
  scores: [10, 20, 30, 40],
};

function findAverage() {
  let sum = 0;
  let average;
  for (i = 0; i < player.scores.length; i++) {
    sum = sum + player.scores[i];
  }
  average = sum / player.scores.length;
  console.log(average);
}

findAverage();

// lef pyramid

function pyramid() {
  let star = "";
  for (let i = 1; i <= 5; i++) {
    star = star + "*";
    console.log(star);
  }
}
pyramid();

// RGB7120
function is_triange(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    console.log("yes");
  } else {
    console.log("no");
  }
}

is_triange(10, 15, 122);

// bubble sort
// Bubble sort algorithm in JavaScript

function bubbleSort(array) {
  // Iterate over the array from the beginning to the end
  for (let i = 0; i < array.length; i++) {
    // Iterate over the array from the beginning to the end, skipping the first element
    for (let j = 1; j < array.length - i; j++) {
      // If the current element is greater than the next element, swap them
      if (array[j - 1] > array[j]) {
        let temp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = temp;
      }
    }
  }

  // Return the sorted array
  return array;
}

// Example usage
let array = [5, 3, 1, 2, 4];
console.log(bubbleSort(array)); // [1, 2, 3, 4, 5]

// challenge

const dates = [
  new Date(2023, 3, 1),
  new Date(2023, 3, 3),
  new Date(2023, 5, 1),
];

dates.sort((a, b) => a - b);
console.log(dates);

let contents = [
  {
    name: "iphone",
    price: 1000.1,
    date: Date(2023, 3, 1),
    category: "electronic",
    stock: 20,
  },
  {
    name: "laptop",
    price: 800.1,
    date: Date(2023, 2, 3),
    category: "electronic",
    stock: 5,
  },
  {
    name: "laptop",
    price: 600.1,
    date: Date(2023, 4, 1),
    category: "electronic",
    stock: 5,
  },
  {
    name: "chair",
    price: 500.1,
    date: Date(2023, 1, 3),
    category: "non-electronic",
    stock: 5,
  },
];

function filter() {
  let recent;
  for (let i = 0; i < contents.length; i++) {
    if (recent > contents[i].date) {
      recent = contents[i].date;
    }
  }
  console.log(recent);
}
let whichone;

whichone = "2023/04/29" > "2023/05/01";

console.log(whichone);

// aabbccd

function delString(abc) {
  let count;
  for (i = 0; i < abc.length; i++) {
    if (abc[i] == abc[i + 1]) {
      abc.replace(abc[i], "1");
      count = count + 1;
    }
  }
  return abc;
}

console.log(delString("aabbccddee"));

let randomText;
randomText = "abcd";
console.log(randomText.length);

// in : 5 3 4 32
// out : 2 3 4

// d%(a*b)=x (d-x)/20+1
