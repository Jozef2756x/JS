const { Pool } = require('pg')

const pool = new Pool ({
    database: 'Library',
    user: 'jozef',
    password: '20081',
    port: 5432
})

const db = async (query, params = []) => {
    const client = await pool.connect()
    try{
        const result = await client.query(query, params)
        return result
    }finally{
        client.release()
    }
}

module.exports = db 