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
