const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  Coffee.findAll()
  .then ( coffees => {
    res.render('pages/coffees', {
      "coffees": coffees,
    });
  })
  .catch( err => {
    res.render('pages/error');
  })
});

router.get('/:id', (req, res) => {
  Coffee.findById(req.params.id)
  .then ( coffee => {
    res.render('pages/coffee', {
      "coffee": coffee,
    });
  })
  .catch( err => {
    res.render('pages/error');
  })
});

module.exports = router;
