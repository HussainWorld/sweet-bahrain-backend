const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        default: 'https://png.pngtree.com/recommend-works/png-clipart/20241204/ourmid/pngtree-dubai-chocolate-2-png-image_14592931.png'
    },
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product