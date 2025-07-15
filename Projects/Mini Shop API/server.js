const express = require('express')
const mongoose = require('mongoose')
const OrdersRouter = require('./routes/orders')
const CustomersRouter = require('./routes/customers')
const ProductsRouter = require('./routes/products')
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB connection error:", err));

const app = express()
app.use(express.json())

app.use('/api/orders', OrdersRouter)
app.use('/api/customers', CustomersRouter)
app.use('/api/products', ProductsRouter)


app.listen(process.env.PORT, ()=>{
    console.log(`SERVER IS STARTED IN ${process.env.PORT} PORT`)
})