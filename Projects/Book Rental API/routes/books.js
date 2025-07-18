const express = require('express')
const pool = require('../database/db')
const { isAdmin } = require('../middlewares/auth')
const router = express.Router()

router.post('/', isAdmin, async (req, res) => {
  const { title, author } = req.body
  const result = await pool.query('INSERT INTO books (title, author) VALUES ($1, $2) RETURNING *', [title, author])
  res.json(result.rows[0])
})

router.get('/:id', async (req, res) => {
  const result = await pool.query('SELECT * FROM books WHERE id = $1', [req.params.id])
  res.json(result.rows[0])
})

router.put('/:id', isAdmin, async (req, res) => {
  const { title, author } = req.body
  const result = await pool.query('UPDATE books SET title = $1, author = $2 WHERE id = $3 RETURNING *', [title, author, req.params.id])
  res.json(result.rows[0])
})

router.delete('/:id', isAdmin, async (req, res) => {
  await pool.query('DELETE FROM books WHERE id = $1', [req.params.id])
  res.sendStatus(204)
})

module.exports = router