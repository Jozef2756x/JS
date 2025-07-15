const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');

router.post('/',async (req, res) => {
    try{
        const customer = new Customer({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone
        })
        const savedCustomer = await customer.save() 
        res.status(201).json(savedCustomer);
    }catch (error) {
        res.status(400).json(error.message);
    }
})

router.get('/', async (req, res) => {
    try {
        const customers = await Customer.find()
        res.status(200).json(customers);
    }catch(error){
        res.status(404).json({message: "users not found"})
    }
})

router.delete('/:id', async (req, res) => {
    try{
        const deletedCustomer = await Customer.findByIdAndDelete(req.params.id)
        res.status(200).json({message: "Customer deleted successfully", customer: deletedCustomer})
    }catch (error) {
        res.status(500).json({message: "Error deleting customer"});
    }
})

module.exports = router