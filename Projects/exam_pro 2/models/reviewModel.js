const pool = require('../config/database');

async function createReview({ book_id, user_id, rating, comment }) {
  const query = `
    INSERT INTO reviews (book_id, user_id, rating, comment)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;
  const values = [book_id, user_id, rating, comment];
  const result = await pool.query(query, values);
  return result.rows[0];
}

async function getReviewsByBook(bookId) {
  const query = `SELECT * FROM reviews WHERE book_id = $1 ORDER BY id DESC;`;
  const result = await pool.query(query, [bookId]);
  return result.rows;
}

async function getReviewsByUser(userId) {
  const query = `SELECT * FROM reviews WHERE user_id = $1 ORDER BY id DESC;`;
  const result = await pool.query(query, [userId]);
  return result.rows;
}

async function updateReview(id, { rating, comment }) {
  const query = `
    UPDATE reviews SET rating=$1, comment=$2 WHERE id=$3 RETURNING *;
  `;
  const values = [rating, comment, id];
  const result = await pool.query(query, values);
  return result.rows[0];
}

async function deleteReview(id) {
  const query = `DELETE FROM reviews WHERE id = $1 RETURNING *;`;
  const result = await pool.query(query, [id]);
  return result.rows[0];
}

module.exports = {
  createReview,
  getReviewsByBook,
  getReviewsByUser,
  updateReview,
  deleteReview,
};
