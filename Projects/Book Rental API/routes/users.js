const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const pool = require('../database/db')
require('dotenv').config()
const { isAdmin } = require('../middlewares/auth')

const router = express.Router()

router.post('/', async (req, res) => {
  const { username, password, role = 'user' } = req.body
  const hashed = await bcrypt.hash(password, 10)
  const result = await pool.query(
    'INSERT INTO users (username, password, role) VALUES ($1, $2, $3) RETURNING *',
    [username, hashed, role]
  )
  res.json(result.rows[0])
})

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const result = await pool.query('SELECT * FROM users WHERE username = $1', [username])
  const user = result.rows[0]
  if (!user) return res.sendStatus(401)
  const match = await bcrypt.compare(password, user.password)
  if (!match) return res.sendStatus(403)
  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET)
  res.json({ token })
})

module.exports = router