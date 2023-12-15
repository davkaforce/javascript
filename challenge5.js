// 1. Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :"Red,Green,White,Black""Red,Green,White,Black""Red+Green+White+Black"

let randomColours = ["red", "Green", "white", "Black"];

function intoString(oneArray) {
  let myString;
  myString =
    oneArray.join() + `\n` + oneArray.join() + `\n` + oneArray.join("+");
  return myString;
}

// console.log(intoString(randomColours));

// 2.  Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number.
//For example if you accept 025468 the output should be 0-254-6-8.

function converto(string) {
  let secondOne;
  secondOne = string.toString();
  //   console.log(firstString, typeof firstString);
  let secondString;
  //   secondOne = firstString.split("");
  //     console.log(secondOne);
  let thirdOne = "";
  for (let i = 0; i < secondOne.length; i++) {
    if (Number(secondOne[i]) % 2 == 0) {
      thirdOne = thirdOne + "-" + secondOne[i];
    } else {
      thirdOne = thirdOne + secondOne[i];
    }
  }
  console.log(thirdOne);
}
converto("05436762");

//3. Write a JavaScript program to find the most frequent item in an array.
//Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

function givenCharCount(char) {
  let count = 0;
  arr1.map((a) => {
    if (char == a) {
      count++;
    }
  });
  return count;
}
// givenCharCount(arr1[1]);

function findMostFrequent(array) {
  let counted = [];
  counted = array.map((a) => {
    return givenCharCount(a);
  });
  //   console.log(counted);
  let maxNumber = Math.max(...counted);
  //   console.log("max number is:" + maxNumber);
  let maxNumberIndex = counted.indexOf(maxNumber);
  //   console.log(maxNumberIndex);
  return "(" + array[maxNumberIndex] + ") " + maxNumber + " times";
}
console.log(findMostFrequent(arr1));

// 4.Write a JavaScript program that accepts a string as input and swaps the case of each character.
// For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

// 5.Write a JavaScript program that prints the elements of the following array.Note : Use nested for loops.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :"row 0"" 1"" 2"" 1"" 24""row 1"------------

var a = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];

function convertArray(array) {
  let myArray = [];
  myArray = array.map((a) => {
    a.unshift("row " + array.indexOf(a));
    return a;
  });
  console.log(myArray);
}

convertArray(a);

//6.  Write a JavaScript program to find the leap years in a given range of years.

function leapYears(year1, year2) {
  let newArray = [];
  let count = 0;
  for (let i = year1; i <= year2; i++) {
    newArray[count] = i;
    count++;
  }
  console.log(newArray);
  let leapYears = newArray.filter((a) => a % 4 == 0);
  console.log(leapYears);
}

leapYears(2010, 2025);
