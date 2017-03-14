const express = require('express')
const router = express.Router()
const db = require('../models')
const { Order } = db

router.get('/', (req, res) => {
  Order.findAll()
  .then(orders => {
    res.json({ orders })
  })
  .catch(() => {
    res.send('error')
  })
})

router.post('/new', (req, res) => {
  Order.create({
    orderStatus: req.body.orderStatus,
    orderTotal: req.body.orderTotal
  })
    .then(orders => {
      res.send('success')
    })
    .catch(() => {
      res.send('error')
    })
})

module.exports = router
