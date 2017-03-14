const express = require('express')
const router = express.Router()
const db = require('../models')
const { Customer } = db

router.post('/new', (req, res) => {
  Customer.create({
    firstName: req.body.orderStatus,
    lastName: req.body.lastName,
    streetAddress: req.body.streetAddress,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  })
    .then(customer => {
      res.send('success')
    })
    .catch(() => {
      res.send('error')
    })
})

module.exports = router
