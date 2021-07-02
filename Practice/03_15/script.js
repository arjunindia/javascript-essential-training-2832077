import Book from "./book.js";

const book1 = new Book("b1", 2018, 91091093123, 160, true);
console.log(book1);
book1.updateStatus(false);
console.log(book1);
