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
