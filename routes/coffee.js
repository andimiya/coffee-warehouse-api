const express = require('express')
const router = express.Router()
const db = require('../models')
const { Coffee } = db

router.get('/', (req, res) => {
  Coffee.findAll()
  .then(coffees => {
    res.json({ coffees })
  })
  .catch(() => {
    res.send('error')
  })
})

router.get('/:id', (req, res) => {
  Coffee.findById(req.params.id)
  .then(coffee => {
    res.json({ coffee })
  })
  .catch(() => {
    res.send('error')
  })
})

router.get('/name/:coffeeName', (req, res) => {
  Coffee.findAll({
    where: {
      name: req.params.coffeeName
    }
  })
  .then(coffee => {
    res.json({ coffee })
  })
  .catch(() => {
    res.send('error')
  })
})

router.get('/high-price/:coffeePrice', (req, res) => {
  Coffee.findAll({
    where: {
      price: {
        gt: req.params.coffeePrice
      }
    }
  })
  .then(coffees => {
    res.json({ coffees })
  })
  .catch(() => {
    res.send('error')
  })
})

router.get('/low-price/:coffeePrice', (req, res) => {
  Coffee.findAll({
    where: {
      price: {
        lt: req.params.coffeePrice
      }
    }
  })
  .then(coffees => {
    res.json({ coffees })
  })
  .catch(() => {
    res.send('error')
  })
})

router.get('/location/:location', (req, res) => {
  Coffee.findAll({
    where: {
      location: req.params.location
    }
  })
  .then(coffees => {
    res.json({ coffees })
  })
  .catch(() => {
    res.send('error')
  })
})

router.get('/caffiene/:caffieneLevel', (req, res) => {
  Coffee.findAll({
    where: {
      caffeine: req.params.caffieneLevel
    }
  })
  .then(coffees => {
    res.json({ coffees })
  })
  .catch(() => {
    res.send('error')
  })
})

router.get('/low-caffiene/:caffieneLevel', (req, res) => {
  Coffee.findAll({
    where: {
      caffeine: {
        lt: req.params.caffieneLevel
      }
    }
  })
  .then(coffees => {
    res.json({ coffees })
  })
  .catch(() => {
    res.send('error')
  })
})

router.get('/high-caffiene/:caffieneLevel', (req, res) => {
  Coffee.findAll({
    where: {
      caffeine: {
        gt: req.params.caffieneLevel
      }
    }
  })
  .then(coffees => {
    res.json({ coffees })
  })
  .catch(() => {
    res.send('error')
  })
})

router.post('/new', (req, res) => {
  Coffee.create({
    name: req.body.name,
    location: req.body.location,
    caffeineLevel: req.body.caffeineLevel,
    price: req.body.price
  })
    .then(coffees => {
      res.send('success')
    })
    .catch(() => {
      res.send('error')
    })
})

module.exports = router
