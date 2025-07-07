const { Pool } = require('pg');

const pool = new Pool({
  user: 'jozef',
  host: 'localhost',
  database: 'school',
  password: '20081', 
  port: 5432,
});

module.exports = pool;