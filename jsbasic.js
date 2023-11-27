// sariig oldog program. odor ogdono, ogogdson odoroos hamaar heddehi sard baigaag todorhoilno
// jishee n 35 gevel 1r sard bish 2r sard baigaa bolhoor feburary
// 65 gevel 3r sar buyu MARCH gesen text hevledeg// dung tootsoh program bichne.

let monthDays = {
  january: 31,
  february: 30,
  march: 31,
  april: 30,
  may: 30,
  june: 30,
  july: 31,
  august: 30,
  september: 30,
  october: 31,
  november: 30,
  december: 31,
};
let allDays = Object.values(monthDays).reduce((acc, curr) => acc + curr, 0);

console.log("there are", allDays, "days in one year");
console.log("current month is:");

let randomDay = 190; // use only number between 0 and 365

if (randomDay >= allDays - monthDays.december) {
  console.log("december");
} else if (randomDay >= allDays - monthDays.december - monthDays.november) {
  console.log("november");
} else if (
  randomDay >=
  allDays - monthDays.december - monthDays.november - monthDays.october
) {
  console.log("october");
} else if (
  randomDay >=
  allDays -
    monthDays.december -
    monthDays.november -
    monthDays.october -
    monthDays.september
) {
  console.log("september");
} else if (
  randomDay >=
  allDays -
    monthDays.december -
    monthDays.november -
    monthDays.october -
    monthDays.september -
    monthDays.august
) {
  console.log("august");
} else if (
  randomDay >=
  allDays -
    monthDays.december -
    monthDays.november -
    monthDays.october -
    monthDays.september -
    monthDays.august -
    monthDays.july
) {
  console.log("july");
} else if (
  randomDay >=
  allDays -
    monthDays.december -
    monthDays.november -
    monthDays.october -
    monthDays.september -
    monthDays.august -
    monthDays.july -
    monthDays.june
) {
  console.log("june");
} else {
  console.log("it's one of other months or your input is wrong");
}

console.log("next challenge begins here");

// 3n oor torliin dun taniulna (midterm1, midterm2, final)
//hervee dundaj dun chine 60s doosh avsan bol dun chine F
//hervee dundaj dun chine 60-70 hoorond bol avsan bol dun chine D
//hervee dundaj dun chine 70-80 hoorond bol avsan bol dun chine C//...
//----
//EXTRA midterm- uud n dund 25% iar noloolno harin final dun buh dungiin  50% d noloolno.

let midterm = 90;
let midterm2 = 85;
let final = 60;

let average = (midterm + midterm2 + final) / 3;
let averageFinal = (midterm + midterm2 + final * 2) / 4;

let lettergrade;
if (average <= 60) {
  lettergrade = "F";
} else if (average <= 70) {
  lettergrade = "D";
} else if (average <= 80) {
  lettergrade = "C";
}

console.log("your average grade is:", average);
console.log("your final average grade is:", averageFinal);
console.log("Congratulations!!! You got", lettergrade, "!!!");

// //from chatgpt
// // Get the current date
// const currentDate = new Date();

// // Extract the day and month
// const dayOfMonth = currentDate.getDate();
// const monthIndex = currentDate.getMonth();

// // Create an array of month names
// const monthNames = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// // Get the month name using the month index
// const currentMonth = monthNames[monthIndex];

// // Log the result
// console.log(`Today is ${currentMonth} ${dayOfMonth}.`);

//another example

// let obj = { a: 1, b: 2, c: 3 };
// let sum = Object.values(obj).reduce((acc, curr) => acc + curr, 0);
// console.log(sum); // Output: 6
