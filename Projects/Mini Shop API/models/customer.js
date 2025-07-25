const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phone: {type: String, required: true, unique: true}
})

module.exports = mongoose.model('customer', customerSchema)