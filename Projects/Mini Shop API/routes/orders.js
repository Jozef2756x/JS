const express = require('express')
const router = express.Router()

const Order = require('../models/order')
const Customer = require('../models/customer')
const Product = require('../models/product')

router.post('/', async (req, res) => {
   try{
    const {customerId, productIds} = req.body

    const customer = await Customer.findById(customerId)
    if(!customer) {
        return res.status(404).json({ message: "Customer not found" })
    }

    const products = await Product.find({_id: { $in: productIds } })
    if(products.length !== productIds.length) {
        return res.status(404).json({ message: "One or more products not found" });
    }

    const order = new Order({
        customer: customerId,
        products: productIds
    })

    const savedOrder = await order.save()

    res.status(201).json({message: "Order created successfully",order: savedOrder,})

   }catch(error){
    res.status(500).json(error.message)
   }
})

router.get('/', async (req, res) => {
    try{
        const orders = await Order.find()
        .populate('customer', 'name email')
        .populate('product', 'name price')

        res.status(201).json(orders)
    }catch(error){
        res.status(500).json(error.message)
    }
})

router.delete('/:id', async (req, res) => {
    try{
    const DeletedOrder = await Order.findByIdAndDelete(req.params.id)

    if(!DeletedOrder) {
        res.status(404).json({message: "Order not found!"})
    }

     res.status(200).json({
      message: "Order deleted successfully",
      order: DeletedOrder
    })

    }catch(error){
        res.status(500).json(error.message)
    }
})

module.exports = router