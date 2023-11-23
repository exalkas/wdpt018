/**
 * Library System
Objective: Create a system that allows users to manage a collection of books and their borrowing status.

Structure each book as an object with the following properties:

id: A unique identifier for the book.
title: The title of the book.
author: The author of the book.
isBorrowed: A boolean indicating whether the book is borrowed or not. Default this to false.

Implement the following functionalities:

a) Add a Book to the Library:

Function name: addBook
Input: title, author
Output: Return the newly created book object.
Action: Add the book to an array representing the library. Ensure each book has a unique id.

b) Remove a Book from the Library:

Function name: removeBook
Input: id of the book to be removed.
Output: Return a message indicating success or failure of the operation.
Action: Remove the book with the given id from the library array.

c) Borrow a Book:

Function name: borrowBook
Input: id of the book to be borrowed.
Output: Return a message indicating success or failure of the operation.
Action: Update the isBorrowed property of the book with the given id to true.

d) Return a Borrowed Book:

Function name: returnBook
Input: id of the book to be returned.
Output: Return a message indicating success or failure of the operation.
Action: Update the isBorrowed property of the book with the given id to false.
 */

class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.isBorrowed = false;
  }
}

class Library {
  constructor() {
    this.books = []; // whatever has the "this" is global to the object
  }

  add(item) {
    this.books.push(item);
    console.log("Add:", this.books);
  }

  removeBook(id) {
    this.books = this.books.filter((item) => item.id !== id);
    console.log("🚀 Remove book:", this.books);
    return "Success";
  }

  borrowBook(id) {
    const bookFound = this.books.find((item) => item.id === id);
    bookFound.isBorrowed = true;

    this.printBooks("🚀 ~ Library ~ borrowBook:");

    return "Success";
  }
  returnBook(id) {
    const bookFound = this.books.find((item) => item.id === id);
    bookFound.isBorrowed = false;

    this.printBooks("🚀 ~ Library ~ returnBook:");

    return "Success";
  }

  printBooks(text) {
    console.log(text, this.books);
  }
}
/**
 * c) Borrow a Book:

Function name: borrowBook
Input: id of the book to be borrowed.
Output: Return a message indicating success or failure of the operation.
Action: Update the isBorrowed property of the book with the given id to true.
 */
const hannibalLecter = new Book(1, "Hannibal Lecter", "Tom Harris");
console.log("🚀 ~ hannibalLecter:", hannibalLecter);

const babylonian = new Library();

babylonian.add(hannibalLecter);

const lordOfRings = new Book(2, "Lord of the rings", "J RR  Tolkin");

babylonian.add(lordOfRings);

// babylonian.removeBook(1);
babylonian.borrowBook(2);
babylonian.returnBook(2);
