const express = require('express');
const app = express();
const PORT = 3000;



app.listen(3000, function() {
  console.log(`Listening on ${PORT}`);
})

module.exports = app;
