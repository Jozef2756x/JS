const { pool } = require('../config/database');

// Get user by email
async function getUserByEmail(email) {
  const query = `SELECT * FROM users WHERE email = $1`;
  const { rows } = await pool.query(query, [email]);
  return rows[0];
}

// Create a new user
async function createUser({ email, password, name, is_admin = false }) {
  const query = `
    INSERT INTO users (email, password, name, is_admin)
    VALUES ($1, $2, $3, $4)
    RETURNING id, email, name, is_admin;
  `;
  const values = [email, password, name, is_admin];
  const { rows } = await pool.query(query, values);
  return rows[0];
}

// Get all users
async function getAllUsers() {
  const query = `SELECT id, email, name, is_admin FROM users ORDER BY id DESC;`;
  const { rows } = await pool.query(query);
  return rows;
}

module.exports = {
  getUserByEmail,
  createUser,
  getAllUsers,
};
