const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    customer: {type: mongoose.Schema.Types.ObjectId, ref: "customer", required: true},
    product: {type: mongoose.Schema.Types.ObjectId, ref: "product"},
    date: {type: Date, default: Date.now}
})

module.exports = mongoose.model('order', orderSchema)