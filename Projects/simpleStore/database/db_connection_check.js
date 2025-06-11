const Pool = require('pg')
const dotenv = require('dotenv')

dotenv.config()

const pool = new Pool ({

})

async function db_check() {
    const client = await pool.conection()
    try{
        console.log("Sussesfuly connected!")
    }catch(err){
        console.log(err.message)
    }
}

module.exports = check