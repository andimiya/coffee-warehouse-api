const express = require('express');
const app = express();
const PORT = 3000;

app.use('/coffee', coffee);
app.use('orders', orders);
app.use('/customers', customers);

app.listen(3000, function() {
  console.log(`Listening on ${PORT}`);
})

module.exports = app;
