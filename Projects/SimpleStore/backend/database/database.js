const { Pool } = require('pg');

const pool = new Pool({
   database: 'simplestore',
  port: 5432,
  user: 'jozef',
  password: '20081',
});

const db = async (query, params = []) => {
  const client = await pool.connect();
  try {
    const result = await client.query(query, params);
    return result; // ✅ վերադարձնում ենք արդյունքը
  } finally {
    client.release();
  }
};

module.exports = db;