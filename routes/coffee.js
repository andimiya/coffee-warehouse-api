const express = require('express');
const router = express.Router();
const db = require('../models');
const { Coffee, Customer, Order, CoffeeOrder } = db;


router.get('/', (req, res) => {
  Coffee.findAll()
  .then ( coffees => {
    res.json({
      "coffees": coffees,
    });
  })
  .catch( err => {
    res.send('error');
  })
});

router.get('/:id', (req, res) => {
  Coffee.findById(req.params.id)
  .then ( coffee => {
    res.json({
      "coffee": coffee,
    });
  })
  .catch( err => {
    res.send('error');
  })
});

router.get('/name/:coffeeName', (req, res) => {
  Coffee.findById(req.params.coffeeName)
  .then ( coffee => {
    res.json({
      "coffee": coffee,
    });
  })
  .catch( err => {
    res.send('error');
  })
});

router.get('/name/:coffeePrice', (req, res) => {
  Coffee.findAll({
    where: [ "price" > req.params.coffeePrice ] })
  .then ( coffees => {
    res.json({
      "coffees": coffees,
    });
  })
  .catch( err => {
    res.send('error');
  })
});

router.post('/new', (req, res) => {
  Coffee.create({
    name: req.body.name,
    location: req.body.location,
    caffeineLevel: req.body.caffeineLevel,
    price: req.body.price
  })
    .then( photos => {
      res.send('success');
    })
    .catch( err => {
      res.send('error');
    });
});

module.exports = router;
