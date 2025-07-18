const pool = require('../config/database');

async function createBook({ title, author, description, added_by_user_id }) {
  const query = `
    INSERT INTO books (title, author, description, added_by_user_id)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;
  const values = [title, author, description, added_by_user_id];
  const result = await pool.query(query, values);
  return result.rows[0];
}

async function getAllBooks() {
  const query = `SELECT * FROM books ORDER BY id DESC;`;
  const result = await pool.query(query);
  return result.rows;
}

async function getBooksByUser(userId) {
  const query = `SELECT * FROM books WHERE added_by_user_id = $1 ORDER BY id DESC;`;
  const result = await pool.query(query, [userId]);
  return result.rows;
}

async function updateBook(id, { title, author, description }) {
  const query = `
    UPDATE books SET title=$1, author=$2, description=$3 WHERE id=$4 RETURNING *;
  `;
  const values = [title, author, description, id];
  const result = await pool.query(query, values);
  return result.rows[0];
}

async function deleteBook(id) {
  const query = `DELETE FROM books WHERE id = $1 RETURNING *;`;
  const result = await pool.query(query, [id]);
  return result.rows[0];
}

module.exports = { createBook, getAllBooks, getBooksByUser, updateBook, deleteBook };
