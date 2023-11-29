// function doSomething(abc) {
//   return abc * abc;
// }

// function calling
// let result = doSomething(15);

// console.log(result);

// function getSomething(abcd) {
//   console.log("input", abcd);
// }

// getSomething("another input");

// function getMultiInput(num1, num2) {
//   console.log("numb1=", num1);
//   console.log("num2=", num2);
//   let sum = num1 + num2;
//   return sum;
// }

// function getGrade(a, b, c) {
//   let av = (a + b + c) / 3;
//   if (av <= 60) {
//     lettergrade = "F";
//   } else if (av <= 70) {
//     lettergrade = "D";
//   } else if (av <= 80) {
//     lettergrade = "C";
//   } else {
//     return "not defined";
//   }
//   return lettergrade;
// }

// console.log(getGrade(50, 32, 98));
//    /  - noogdwor
//    %  - uldegdel

function problem1(a, b) {
  let result1 = 2 * (a + b);
  let result2 = a * b;
  return result1 + result2 - "10";
}

let mainresult = problem1(5, 6);
console.log(mainresult);

// number + number = number
//

// problem #2

// function problem2(x) {
//   x = 3 * x - 5;
//   return x;
// }
// console.log(problem2(5));

// problem #3

// function problem3(x) {
//   result = 4 * x ** 2 - 3 * x + 5;
//   return result;
// }
// p3_output = problem3(1);

// console.log(p3_output);

// problem classroom

function functionA(num1, num2, operation) {
  let answer;
  if (operation == "+") {
    answer = num1 + num2;
  }
  return answer;
}

function functionB(num1, num2, operation) {
  if (operation == "+") {
    return num1 + num2;
  }
}

resultA = functionA(2, 2, "+");
resultB = functionB(2, 3, "+");
console.log("result of functionA is", resultA);
console.log("result of functionB is", resultB);

// scope

// global scope - without any bracket
// local scope - with curly bracket/
