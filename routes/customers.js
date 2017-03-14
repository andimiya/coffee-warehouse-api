const express = require('express')
const router = express.Router()
const db = require('../models')
const { Customer } = db

router.get('/', (req, res) => {
  Customer.findAll()
  .then(customers => {
    res.json({ customers })
  })
  .catch(() => {
    res.send('error')
  })
})

router.get('/:id', (req, res) => {
  Customer.findById(req.params.id)
  .then(coffee => {
    res.json({ coffee })
  })
  .catch(() => {
    res.send('error')
  })
})

// router.get('/first-name/:firstName', (req, res) => {
//   Customer.findAll({
//     where: {
//       name: req.params.firstName
//     }
//   })
//   .then(customer => {
//     res.json({ customer })
//   })
//   .catch(() => {
//     res.send('error')
//   })
// })

router.post('/new', (req, res) => {
  Customer.create({
    firstName: req.body.firstName,
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
