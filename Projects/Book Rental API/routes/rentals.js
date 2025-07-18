const express = require('express')
const pool = require('../database/db')
const router = express.Router()

router.post('/', async (req, res) => {
  const { book_id, due_date } = req.body
  const book = await pool.query('SELECT * FROM books WHERE id = $1', [book_id])
  if (!book.rows[0] || !book.rows[0].isavailable) return res.status(400).json({ error: 'Book not available' })
  await pool.query('UPDATE books SET isAvailable = FALSE WHERE id = $1', [book_id]);
  const result = await pool.query('INSERT INTO rentals (user_id, book_id, due_date) VALUES ($1, $2, $3) RETURNING *', [req.user.id, book_id, due_date])
  res.json(result.rows[0])
})

router.put('/:id/return', async (req, res) => {
  const rental = await pool.query('SELECT * FROM rentals WHERE id = $1', [req.params.id])
  if (!rental.rows[0]) return res.sendStatus(404);
  await pool.query('UPDATE rentals SET return_date = CURRENT_TIMESTAMP WHERE id = $1', [req.params.id])
  await pool.query('UPDATE books SET isAvailable = TRUE WHERE id = $1', [rental.rows[0].book_id])
  res.json({ message: 'Book returned' })
})

module.exports = router