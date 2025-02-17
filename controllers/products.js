const express = require('express')
const router = express.Router()
const Product = require('../models/Product')
const verifyToken = require('../middleware/verify-token')

// GET all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find({})
        res.json(products)
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
})

// GET single product
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if (!product) {
            return res.status(404).json({ err: 'Product not found' })
        }
        res.json(product)
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
})

// POST new product
router.post('/', async (req, res) => {
    try {
        const newProduct = await Product.create(req.body)
        res.status(201).json(newProduct)
    } catch (err) {
        res.status(400).json({ err: err.message })
    }
})

// PUT update product
router.put('/:id', verifyToken, async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        if (!updatedProduct) {
            return res.status(404).json({ err: 'Product not found' })
        }
        res.json(updatedProduct)
    } catch (err) {
        res.status(400).json({ err: err.message })
    }
})

// DELETE product
router.delete('/:id', verifyToken, async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id)
        if (!deletedProduct) {
            return res.status(404).json({ err: 'Product not found' })
        }
        res.json({ message: 'Product deleted successfully' })
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
})

module.exports = router
