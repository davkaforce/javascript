const shoppingCartItems = [
  { name: "Laptop", price: 1200, quantity: 1, category: "Electronics" },
  { name: "Backpack", price: 80, quantity: 2, category: "Fashion" },
  { name: "Smartphone", price: 800, quantity: 1, category: "Electronics" },
  { name: "Shoes", price: 50, quantity: 1, category: "Fashion" },
  { name: "Book", price: 15, quantity: 3, category: "Books" },
  { name: "Headphones", price: 100, quantity: 1, category: "Electronics" },
  { name: "T-shirt", price: 20, quantity: 5, category: "Fashion" },
  { name: "Tablet", price: 300, quantity: 2, category: "Electronics" },
  { name: "Jeans", price: 60, quantity: 2, category: "Fashion" },
  { name: "Notebook", price: 10, quantity: 4, category: "Books" },
  { name: "Camera", price: 500, quantity: 1, category: "Electronics" },
  { name: "Dress", price: 70, quantity: 1, category: "Fashion" },
  {
    name: "External Hard Drive",
    price: 80,
    quantity: 1,
    category: "Electronics",
  },
  { name: "Sweater", price: 40, quantity: 3, category: "Fashion" },
  { name: "Fitness Tracker", price: 60, quantity: 1, category: "Electronics" },
  { name: "Sunglasses", price: 25, quantity: 2, category: "Fashion" },
  { name: "Cookbook", price: 18, quantity: 2, category: "Books" },
  { name: "Gaming Console", price: 300, quantity: 1, category: "Electronics" },
  { name: "Running Shoes", price: 55, quantity: 1, category: "Fashion" },
  { name: "Desk Chair", price: 120, quantity: 1, category: "Furniture" },
];

//calculate discount price by 10% {name, price, quantity, totalCost}

function calculateTotalCosts(items) {
  let firstArray = [];
  firstArray = items.map((a) => {
    return {
      name: a.name,
      discountedPrice: a.price * 0.9,
      quantity: a.quantity,
      totalCost: a.price * 0.9 * a.quantity,
    };
  });
  return firstArray;
}
let result = calculateTotalCosts(shoppingCartItems);
// console.log(result);

// Discounttai product uud deer 2 oos deesh quantity tai product uudiig gargaj ir

function moreThanTwo(items) {
  let secondArray = [];
  secondArray = calculateTotalCosts(items).filter((a) => a.quantity > 2);
  //   console.log(secondArray);
}

moreThanTwo(shoppingCartItems);

// dicounttai product uudiin bvh price iin dundajiig olood dundajaas ih bolon baga productuudiig gargaj ir

function higherAndLowerThanAverage(items) {
  let sum = 0;
  for (let i = 0; i < items.length; i++) {
    sum = sum + calculateTotalCosts(items)[i].discountedPrice;
  }
  console.log(sum);
  let average = sum / items.length;
  console.log(average);
  let thirdArray = [];
  thirdArray = calculateTotalCosts(items);
  let fourthArray = [];
  let fifthArray = [];
  //   console.log(thirdArray);
  fourthArray = thirdArray.filter((a) => a.discountedPrice < average);
  fifthArray = thirdArray.filter((a) => a.discountedPrice > average);
  console.log(fourthArray, fifthArray);
}

higherAndLowerThanAverage(shoppingCartItems);
