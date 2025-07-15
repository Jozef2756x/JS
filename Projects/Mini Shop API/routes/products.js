const express = require('express')
const router = express.Router()
const Product = require('../models/product')

router.post('/', async (req, res) => {
    const product = new Product(req.body)
    await product.save()
    res.status(201).json(product)
})

router.get('/', async (req, res) => {
    const products = await Product.find()
    res.json(products)
})

router.delete('/:id', async (req, res) => {
    await product.FindByIdAndDelete(req.params.id)
    res.status(204)
})

module.exports=router