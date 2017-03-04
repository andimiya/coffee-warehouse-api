const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  Coffee.findAll()
  .then ( coffee => {
    res.render('pages/coffees', {
      "coffee": coffee,
    });
  })
  .catch( err => {
    res.render('pages/error');
  })
});

module.exports = router;
