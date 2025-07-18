const pool = require('../database/db')

async function init() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(100) UNIQUE NOT NULL,
      password TEXT NOT NULL,
      role VARCHAR(10) DEFAULT 'user' CHECK (role IN ('admin', 'user'))
    );

    CREATE TABLE IF NOT EXISTS books (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      author VARCHAR(255),
      isAvailable BOOLEAN DEFAULT TRUE
    );

    CREATE TABLE IF NOT EXISTS rentals (
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES users(id),
      book_id INTEGER REFERENCES books(id),
      rent_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      due_date TIMESTAMP NOT NULL,
      return_date TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS overdue_records (
      id SERIAL PRIMARY KEY,
      rental_id INTEGER REFERENCES rentals(id),
      marked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `)
  console.log('Tables initialized')
}

init()