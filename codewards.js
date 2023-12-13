// no#1

// Сүүлийн 4 цифрийг #### болгох

let newArray = [3, 9, 2, 4, 4, 3, 2, 8];

function hideMyNums(num) {
  num[num.length - 1] = "#";
  num[num.length - 2] = "#";
  num[num.length - 3] = "#";
  num[num.length - 4] = "#";
  return num;
}

let result = hideMyNums(newArray);
console.log(result);

// let nums = [1, 2, 3, 4, 5, 1, 3, 1, 3];
// let newNums = nums.map((a) => {
//   if (a % 2 == 0) {
//     return { name: "hosoo", age: 18 };
//   }
// });
// console.log(newNums);
// console.log(nums);

//no2
let numbers = "1 10 3 4 5";

function highAndLow(num) {
  let newArray = [];
  let result = [];
  newArray = num.split(" ");
  console.log(newArray);
  console.log(typeof newArray[0]);
  newArray = newArray.map((a) => {
    return Number(a);
  });
  console.log(newArray, typeof newArray[0]);
  newArray = newArray.sort((a, b) => b - a);
  console.log(newArray);
  result = newArray[0];
  newArray = newArray.sort((a, b) => a - b);
  console.log(newArray);
  result = result + " " + newArray[0];
  console.log(result);
  return result;
}

highAndLow(numbers);

function highAndLow(num) {
  let newArray = [];
  let result = [];
  newArray = num.split(" ");
  newArray = newArray.map((a) => {
    return Number(a);
  });
  newArray = newArray.sort((a, b) => b - a);
  result = newArray[0];
  newArray = newArray.sort((a, b) => a - b);
  result = result + " " + newArray[0];
  return result;
}

highAndLow(numbers);
