const express = require('express');
const { body, validationResult } = require('express-validator');
const { writeData, readData } = require('../utils/fileOperations');
const productsRouter = express.Router();

productsRouter.post('/products', (req, res) => {});

module.exports = productsRouter;