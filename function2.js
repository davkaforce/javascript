// let input = prompt("Enter a name: ");

// // Object
// let person = {
//   firstName: "John",
//   lastnName: "Sasha",
// };

// person.firstName = "newname";

// // Array []
// let array = ["car", "apple", "pen", "bowl"];
// console.log(array[0]);

// stata and population number of USA

let usa = [
  { state: "california", ppl: 9.9 },
  { state: "texas", ppl: 30 },
  { state: "Florida", ppl: 22.2 },
  { state: "NewYork", ppl: 19.6 },
  { state: "Pennsylvania", ppl: 12.9 },
];

console.log(usa[0].state, usa[0].ppl + "M");

// city gedeg nertei array

let cities = ["NY", "Chicago", "LA"];
console.log(cities[1]);

// usa object with state and population

let us = {
  california: 9.9,
  texas: 30,
  FLorida: 22.2,
};

console.log(usa[0].state, usa[0].ppl + "M");

// mortgage requirement checklist
// salary ni 2 sayaas ih, niigmiin daatgaliin shimtgel toldog bh, passporttoi eswel identitycardtai bh, bas person bh eswel itgemjleheer bh, dept ni 1 sayas baga bwal zeel garna.

let personData = [
  (John = {
    salary: 30000000,
    VAT: true,
    passport: false,
    identification: true,
    debt: 800000,
  }),
  (Mary = {
    salary: 1900000,
    VAT: true,
    identification: true,
    debt: 0,
  }),
];

function checklist(name, index) {
  if (
    name[index].salary > 2000000 &&
    name[index].VAT == true &&
    (name[index].passport || name[index].identification == true) &&
    name[index].debt < 1000000
  ) {
    return true;
  } else return false;
}

let result = checklist(personData, 1);
console.log(result);
