const express = require('express');
const settings = require('./utils/config');
const authRouter = require('./routes/auth');
const productRouter = require('./routes/products');
const userRouter = require('./routes/users')
const path = require('path');
require('dotenv').config();

require('./database/connection_async');

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, '../frontend/public')));

app.use('/auth', authRouter);
app.use('/products', productRouter);
app.use('/users', userRouter);


app.listen(settings.port, () => {
  console.log(`✅ Server running on port ${settings.port}`);
});



