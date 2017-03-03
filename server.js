const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./models');
const coffee = require('./routes/coffee');
// const orders = require('./routes/orders');
// const customer = require('./routes/customers');

app.use('/coffee', coffee);
// app.use('orders', orders);
// app.use('/customers', customers);

app.listen(3000, function() {
  console.log(`Listening on ${PORT}`);
  db.sequelize.sync();
})

module.exports = app;
