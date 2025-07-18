require('dotenv').config()

const settings = {
    port: process.env.PORT,
    name: process.env.DB_NAME,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
}

module.exports = settings