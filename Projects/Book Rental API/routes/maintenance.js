const express = require('express')
const pool = require('../database/db')
const { isAdmin } = require('../middlewares/auth')
const router = express.Router()

router.post('/check-overdue', isAdmin, async (req, res) => {
  const overdue = await pool.query(`
    SELECT * FROM rentals WHERE return_date IS NULL AND due_date < CURRENT_TIMESTAMP
  `)
  for (let rental of overdue.rows) {
    await pool.query('INSERT INTO overdue_records (rental_id) VALUES ($1)', [rental.id])
  }
  res.json({ message: `${overdue.rows.length} overdue rentals marked.` })
})

module.exports = router