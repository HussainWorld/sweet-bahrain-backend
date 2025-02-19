const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Order = require('../models/Order');
const verfiyToken = require('../middleware/verify-token');

// POST a new order
router.post('/', async (req, res) => {
  try{
    //geting the product
    const product = req.body.productId
    
    //spliting the token
    const token = req.headers.authorization.split(' ')[1]
    //decodeing the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const user = decoded.payload

    const order = {
      user: user._id,
      product: product
    }

    const newOrder = await Order.create(order)

    res.status(201).json(newOrder)
  }catch(err){
    res.status(500).json({ err: err.message})
  }
})


//DELETE Order
router.delete('/:id', verfiyToken, async (req, res) => {
  try{
    const deletedOrder = await Order.findByIdAndDelete(req.params.id)
    if(!deletedOrder){
      return res.status(404).json({ err: 'Order not found'})
    }
    res.json({ message: 'Order deleted successfully'})
  }catch(err){
    res.status(500).json({ err: err.message })
  }
})


module.exports = router