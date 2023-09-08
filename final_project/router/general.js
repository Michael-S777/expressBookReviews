const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  const getBooks = new Promise(resolve => resolve(res.status(200).json(books)));
  getBooks.then(() => console.log('Promise for Task 10 resolved'));
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn', function (req, res) {
  const getBook = new Promise((resolve, reject) => {
    const isbn = req.params.isbn;

    if (books[isbn]) {
      resolve(res.status(200).json(books[isbn]));
    } else {
      reject(res.status(404).json({ message: `The book is not found by ISBN: ${isbn}` }));
    }
  });
  getBook
    .then(() => console.log('Promise for Task 11 resolved'))
    .catch(() => console.log('Promise for Task 11 rejected'));
});

// Get book details based on author
public_users.get('/author/:author', (req, res) => {
  const getBooks = new Promise((resolve, reject) => {
    const author = req.params.author;
    const booksOfAuthor = Object.values(books).filter(book => book.author === author);

    if (booksOfAuthor.length > 0) {
      resolve(res.status(200).json(booksOfAuthor));
    } else {
      reject(res.status(404).json({ message: `The books are not found by author: ${author}` }));
    }
  });
  getBooks
    .then(() => console.log('Promise for Task 12 resolved'))
    .catch(() => console.log('Promise for Task 12 rejected'));
});

// Get all books based on title
public_users.get('/title/:title', (req, res) => {
  const getBooks = new Promise((resolve, reject) => {
    const title = req.params.title;
    const booksWithTitle = Object.values(books).filter(book => book.title === title);

    if (booksWithTitle.length > 0) {
      resolve(res.status(200).json(booksWithTitle));
    } else {
      reject(res.status(404).json({ message: `The books are not found by title: ${title}` }));
    }
  });
  getBooks
    .then(() => console.log('Promise for Task 13 resolved'))
    .catch(() => console.log('Promise for Task 13 rejected'));
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.general = public_users;
