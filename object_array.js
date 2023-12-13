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

// let products = [
//   { name: "iphone", price: 1000, category: "electronic", stock: 20 },
//   { name: "laptop", price: 800, category: "electronic", stock: 5 },
//   { name: "laptop", price: 600, category: "electronic", stock: 5 },
//   { name: "chair", price: 500, category: "non-electronic", stock: 5 },
// ];

// function getDiscount(percent) {
//   for (i = 0; i < 4; i++) {
//     products[i].price = products[i].price * (1 + percent / 100);
//     console.log(products[i].price);
//   }
// }
// getDiscount(10);

// function getCategory() {
//   for (let i = 0; i < products.length; i++)
//     if (products[i].category == "electronic") {
//       console.log(products[i]);
//     }
// }
// getCategory();

// function ElecDiscount() {
//   for (let i = 0; i < products.length; i++) {
//     if (products[i].category == "electronic") {
//       products[i].price = products[i].price * (1 + 10 / 100);
//       console.log(products[i]);
//     }
//   }
// }
// ElecDiscount();

// let expensive = products[0].price;
// for (let i = 0; i <= products.length; i++) {
//   if (expensive < products[i].price) {
//     expensive = products[i].price;
//   }
// }
// console.log(expensive);

// let products = [
//   { name: "iphone", price: 1000, category: "electronic", stock: 20 },
//   { name: "laptop", price: 800, category: "electronic", stock: 5 },
//   { name: "laptop", price: 600, category: "electronic", stock: 5 },
//   { name: "chair", price: 500, category: "non-electronic", stock: 5 },
// ];

let products = [
  {
    name: "Smartphone",
    price: 599.99,
    stock: 50,
    category: "Electronics",
    brand: "Samsung",
  },
  {
    name: "Laptop",
    price: 1099.99,
    stock: 30,
    category: "Electronics",
    brand: "Apple",
  },
  {
    name: "Headphones",
    price: 129.99,
    stock: 100,
    category: "Electronics",
    brand: "Sony",
  },
  {
    name: "Running Shoes",
    price: 79.99,
    stock: 80,
    category: "Sports",
    brand: "Nike",
  },
  {
    name: "Coffee Maker",
    price: 49.99,
    stock: 20,
    category: "Home Appliances",
    brand: "Keurig",
  },
  {
    name: "Backpack",
    price: 39.99,
    stock: 60,
    category: "Fashion",
    brand: "Adidas",
  },
  {
    name: "Watch",
    price: 199.99,
    stock: 40,
    category: "Accessories",
    brand: "Casio",
  },
  {
    name: "Gaming Console",
    price: 399.99,
    stock: 25,
    category: "Electronics",
    brand: "Microsoft",
  },
  {
    name: "Sunglasses",
    price: 149.99,
    stock: 70,
    category: "Fashion",
    brand: "Ray-Ban",
  },
  {
    name: "Wireless Speaker",
    price: 89.99,
    stock: 45,
    category: "Electronics",
    brand: "JBL",
  },
];

function findByExpensive() {
  let expensive = products[0].price;
  for (let i = 1; i < 10; i++) {
    if (expensive < products[i].price) {
      expensive = products[i].price;
    }
  }
  console.log(expensive);
}
findByExpensive();
