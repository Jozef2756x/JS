const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const userRoutes = require('./routes/users')
const bookRoutes = require('./routes/books')
const rentalRoutes = require('./routes/rentals')
const maintenanceRoutes = require('./routes/maintenance')
const { authMiddleware } = require('./middlewares/auth')

const app = express()
app.use(bodyParser.json())

app.use('/users', userRoutes);
app.use('/books', authMiddleware, bookRoutes)
app.use('/rentals', authMiddleware, rentalRoutes)
app.use('/maintenance', authMiddleware, maintenanceRoutes)

app.listen(process.env.PORT || 3000, () => {
  console.log('Server running on port', process.env.PORT || 3000)
})