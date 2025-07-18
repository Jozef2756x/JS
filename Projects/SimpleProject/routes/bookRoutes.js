const express = require('express');
const router = express.Router();
const bookService = require('../services/bookService');
const { authenticate, requireAdmin } = require('../middlewares/authMiddleware');

router.post('/', authenticate, requireAdmin, async (req, res) => {
  try {
    const bookData = {
      ...req.body,
      added_by_user_id: req.user.id,
    };
    const book = await bookService.addBook(bookData);
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/', async (req, res) => {
  const books = await bookService.getAllBooks();
  res.json(books);
});

router.get('/user/:userId', async (req, res) => {
  const books = await bookService.getBooksByUser(req.params.userId);
  res.json(books);
});

router.put('/:id', authenticate, requireAdmin, async (req, res) => {
  try {
    const updated = await bookService.updateBook(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', authenticate, requireAdmin, async (req, res) => {
  try {
    const deleted = await bookService.deleteBook(req.params.id);
    res.json(deleted);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
