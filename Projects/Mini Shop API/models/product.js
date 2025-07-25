const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    InStock: {type: Boolean, default: true}
})

module.exports = mongoose.model('product', productSchema)