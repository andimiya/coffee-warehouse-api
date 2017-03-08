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

router.get('/caffeine/:caffeineLevel', (req, res) => {
  Coffee.findAll({
    where: {
      caffeine: req.params.caffeineLevel
    }
  })
  .then(coffees => {
    res.json({ coffees })
  })
  .catch(() => {
    res.send('error')
  })
})

router.get('/low-caffeine/:caffeineLevel', (req, res) => {
  Coffee.findAll({
    where: {
      caffeine: {
        lt: req.params.caffeineLevel
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

router.get('/high-caffeine/:caffeineLevel', (req, res) => {
  Coffee.findAll({
    where: {
      caffeine: {
        gt: req.params.caffeineLevel
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
    caffeine: req.body.caffeine,
    price: req.body.price
  })
    .then(coffees => {
      res.send('success')
    })
    .catch(() => {
      res.send('error')
    })
})

router.put('/update/:id', (req, res) => {
  Coffee.update({
    name: req.body.name,
    location: req.body.location,
    caffeine: req.body.caffeine,
    price: req.body.price
  },
    { where: {
      id: req.params.id }
    })
    .then(coffees => {
      res.send('success')
    })
    .catch(() => {
      res.send('error')
    })
})

router.delete('/:id', (req, res) => {
  Coffee.destroy(
    { where: {
      id: req.params.id }
    })
    .then(coffees => {
      res.send('success')
    })
    .catch(() => {
      res.send('error')
    })
})

module.exports = router
