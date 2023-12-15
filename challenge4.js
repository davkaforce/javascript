const bookData = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    rating: 4.5,
    price: 15.99,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    rating: 4.8,
    price: 19.99,
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "Non-Fiction",
    rating: 4.7,
    price: 24.99,
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    rating: 4.6,
    price: 12.99,
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    rating: 4.9,
    price: 18.99,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    rating: 4.3,
    price: 14.99,
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    genre: "Mystery",
    rating: 4.2,
    price: 16.99,
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fantasy",
    rating: 4.8,
    price: 20.99,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    rating: 4.7,
    price: 17.99,
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    rating: 4.9,
    price: 22.99,
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    rating: 4.9,
    price: 29.99,
  },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    genre: "Mystery",
    rating: 4.4,
    price: 21.99,
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    genre: "Dystopian",
    rating: 4.5,
    price: 14.99,
  },
  {
    title: "The Shining",
    author: "Stephen King",
    genre: "Horror",
    rating: 4.6,
    price: 18.99,
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Dystopian",
    rating: 4.7,
    price: 20.99,
  },
  {
    title: "The Odyssey",
    author: "Homer",
    genre: "Classics",
    rating: 4.5,
    price: 15.99,
  },
  {
    title: "The Road",
    author: "Cormac McCarthy",
    genre: "Post-Apocalyptic",
    rating: 4.2,
    price: 16.99,
  },
  {
    title: "Gone with the Wind",
    author: "Margaret Mitchell",
    genre: "Historical Fiction",
    rating: 4.8,
    price: 23.99,
  },
  {
    title: "The Martian",
    author: "Andy Weir",
    genre: "Science Fiction",
    rating: 4.6,
    price: 19.99,
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    genre: "Adventure",
    rating: 4.4,
    price: 17.99,
  },
];

// find Expensive book more than 15

function findExpensive(books) {
  let firstArray = [];
  firstArray = books.filter((a) => a.price > 15);
  return firstArray;
}
// console.log(findExpensive(bookData));

// find 12-18 priced range books

function findExpensiveRange(books) {
  let firstArray = [];
  firstArray = books.filter((a) => a.price > 12 && a.price < 18);
  return firstArray;
}
// console.log(findExpensiveRange(bookData));

// sort books by rating

function sortByRating(books) {
  let firstArray = books;
  firstArray = books.sort((b, a) => a.rating - b.rating);
  return firstArray;
}
// console.log(sortByRating(bookData));

// find more than 20 length books

function findByTitleLength(books) {
  let firstArray = [];
  firstArray = books.filter((a) => a.title.length > 10);
  return firstArray;
}
// console.log(findByTitleLength(bookData));

// add summary on object by like this `A captivating book by ${book.author}

// function addSummary(books) {
//   let firstArray = books;
//   for (let i = 0; i < firstArray.length; i++) {
//     firstArray[i].summary =
//       "A " + firstArray[i].genre + " book by " + firstArray[i].author;
//   }
//   return firstArray;
// }

// console.log(addSummary(bookData));

function addingSummaryByMap(books) {
  let firstArray = [];
  firstArray = books.map((a) => {
    a.summary = a.genre + " book by " + a.author;
    return a;
  });
  console.log(firstArray);
}

// addingSummaryByMap(bookData);

// Book title iin character length ni 10 aas ihiin awdag function bich, tedgeeriin price range iig ni oor function oor garga

function priceRange(books) {
  let moreThanTen = findByTitleLength(books);
  let minPrice;
  let maxPrice;
  let temp = [];
  temp = moreThanTen.map((a) => {
    return a.price;
  });
  // console.log(temp);
  minPrice = Math.min(...temp);
  // console.log(minPrice);
  maxPrice = Math.max(...temp);
  // console.log(maxPrice);
  return "The range is between " + minPrice + "-" + maxPrice;
}
console.log(priceRange(bookData));

// 12 oos ih vnetei nomnuudaas rating ni 4.7 oos deesh rating tei nomnuudiig oldog function bich

function filterByPriceAndRating(minPrice, minRating) {
  let firstArray = bookData
    .filter((a) => a.price > minPrice)
    .filter((a) => a.rating > minRating);
  console.log(firstArray);
}

filterByPriceAndRating(12, 4.8);
