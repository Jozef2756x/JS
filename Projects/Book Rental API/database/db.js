const { Pool } = require('pg')

const pool = new Pool({
  database: "book_rental",
  user: "jozef",
  password: "20081",
  port: 5432
})

module.exports = pool