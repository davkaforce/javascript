//
// \n is enter or white space
// \t is tab space
// example: let str = "string\nstring";

let num = 1234;
let numStr = num.toString();

let strNum = "123";
let numFromStr = Number(strNum);

console.log(typeof numFromStr);

// single quotation "
// double quotation '
// template literal `

let sentence = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

console.log(sentence);
let counts = 0;
for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] == "\n") {
    counts++;
  }
}
console.log(count);

let multiArray = [];
let arr = [];
let str = "";
let c = 0;
let count = 0;
for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] == " ") {
    arr[c] = str;
    c++;
    str = "";
  } else {
    str = str + sentence[i];
  }

  if (sentence[i] == "\n") {
    count = count + 1;
    for (let j = 0; j < i - 1; j++) {
      multiArray[count] = arr[i - 1];
    }
  }
}
console.log(arr);

function convertToArray(text) {
  let singleArray = [];
  singleArray = text.split(" ");
  console.log(singleArray);
  let rowWords = math.floor(singleArray.length / 8);
  console.log(rowWords);
  for (let i = 0; i < singleArray.length; i++) {}
}
convertToArray(sentence);

//function types
function doSomething() {
  console.log("doing something");
}

let doOther = () => {
  console.log("other things");
};

let mathOperation = (num1, num2, operation) => {
  return operation(num1, num2);
};

const result = mathOperation(10, 20, doSomething);
console.log(result);

let newVar;

// array methods

let nums = [1, 4, 65, 2, 5, 12, 34, 71, 222, 13, 7];
nums.sort((a, b) => b - a);
console.log(nums);

// array methods - sort, map, filter

let product = [
  (John = {
    price: 30000000,
    VAT: true,
    passport: false,
    identification: true,
    debt: 800000,
  }),
  (Mary = {
    price: 1900000,
    VAT: true,
    identification: true,
    debt: 0,
  }),
];

let newNumsA;
let newNumsB;
personData.sort((a, b) => a - b);
newNumsA = personData.map();
newNumsB = personData.filter((a) => {
  return a % 2 == 0; //true or false avna
});

let products = [
  { name: "iphone", price: 1000.1, category: "electronic", stock: 20 },
  { name: "laptop", price: 800.1, category: "electronic", stock: 5 },
  { name: "laptop", price: 1600.1, category: "electronic", stock: 5 },
  { name: "chair", price: 500.1, category: "non-electronic", stock: 5 },
];

products.sort((a, b) => {
  if (a.price > b.price) {
    return -1;
  } else {
    return 1;
  }
});

console.log(products);

let newArray;
newArray = products.map((a) => {
  return a.price;
});

console.log(newArray);

let secondArray;

secondArray = products.filter((a) => {
  return a.price > 700;
});

console.log(secondArray);

let numsX = [1, 31, 5, 7, 4, 6, 23, 54];
numsX.sort((a, b) => {
  return b - a;
});

console.log(numsX);
