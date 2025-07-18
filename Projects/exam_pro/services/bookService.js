const bookModel = require('../models/bookModel');

async function addBook(bookData) {
  return await bookModel.createBook(bookData);
}

async function getAllBooks() {
  return await bookModel.getAllBooks();
}

async function getBooksByUser(userId) {
  return await bookModel.getBooksByUser(userId);
}

async function updateBook(id, bookData) {
  return await bookModel.updateBook(id, bookData);
}

async function deleteBook(id) {
  return await bookModel.deleteBook(id);
}

module.exports = { addBook, getAllBooks, getBooksByUser, updateBook, deleteBook };
