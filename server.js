const express = require('express');
const app = express();
const PORT = 3000;
const bp = require('body-parser');
const db = require('./models');
const { Coffee, Customer, Order, CoffeeOrder } = db;
const CONFIG = require('./config/config.json');
const coffee = require('./routes/coffee');
// const orders = require('./routes/orders');
// const customer = require('./routes/customers');

//bodyparser
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.use('/coffee', coffee);
// app.use('orders', orders);
// app.use('/customers', customers);

app.listen(3000, function() {
  console.log(`Listening on ${PORT}`);
  db.sequelize.sync();
})

module.exports = app;
