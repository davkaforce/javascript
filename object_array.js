// LOOP

// for (initialize; condition; update) {body or what you will do}
// 1. initialize 2. condition 3. body 4. update 5. condition 6. body-update-condition-body->
for (let i = 0; i < 10; i = i + 1) {
  console.log(i);
}
console.log(i);

function print(num) {
  for (let i = 0; i < num; i++) {
    console.log("HELLO WORLD");
  }
}

print(5);

let num = 0;
for (console.log("initialize"); num < 5; console.log("update")) {
  num = num + 1;
  console.log("body");
}

// ehnii n toonii niilber

function sumOfN(n) {
  let mult = 1;
  for (let i = 1; i < n; i++) {
    mult = mult * i;
  }
  return mult;
}

console.log(sumOfN(6));

// 10 products inside array
// function bichne for discount for all products
// filter function

let products = [
  { name: "iphone", price: 1000, category: "electronic", stock: 20 },
  { name: "laptop", price: 600, category: "electronic", stock: 5 },
  { name: "laptop", price: 600, category: "electronic", stock: 5 },
  { name: "chair", price: 600, category: "non-electronic", stock: 5 },
];

// function getDiscount(percent) {
//   for (i = 0; i < 4; i++) {
//     products[i].price = products[i].price * (1 + percent / 100);
//     console.log(products[i].price);
//   }
// }
// getDiscount(10);

function getCategory() {
  for (let i = 0; i < products.length; i++)
    if (products[i].category == "electronic") {
      console.log(products[i]);
    }
}
getCategory();

function ElecDiscount() {
  for (let i = 0; i < products.length; i++) {
    if (products[i].category == "electronic") {
      products[i].price = products[i].price * (1 + 10 / 100);
      console.log(products[i]);
    }
  }
}
ElecDiscount();
