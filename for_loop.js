// let products = [
//   {
//     name: "Smartphone",
//     price: 599.99,
//     stock: 50,
//     category: "Electronics",
//     brand: "Samsung",
//   },
//   {
//     name: "Laptop",
//     price: 1099.99,
//     stock: 30,
//     category: "Electronics",
//     brand: "Apple",
//   },
// ];

let products = [
  { name: "iphone", price: 1000.1, category: "electronic", stock: 20 },
  { name: "laptop", price: 800.1, category: "electronic", stock: 5 },
  { name: "laptop", price: 600.1, category: "electronic", stock: 5 },
  { name: "chair", price: 500.1, category: "non-electronic", stock: 5 },
];

function findByExpensive() {
  let expensive = products[1].price;
  for (let i = 1; i < products.length; i++) {
    if (expensive < products[i].price) {
      expensive = products[i].price;
    }
  }
  console.log(expensive);
}
findByExpensive();
