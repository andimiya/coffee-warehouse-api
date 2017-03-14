const express = require('express')
const PORT = 3000
const handlebars = require('express-handlebars')
const app = express()
const bp = require('body-parser')
const db = require('./models')
const { Coffee, Customer, Order, CoffeeOrder } = db
const CONFIG = require('./config/config.json')
const coffee = require('./routes/coffee')
const order = require('./routes/orders')
const customer = require('./routes/customers')

//  bodyparser
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.use('/coffee', coffee)
app.use('/order', order)
app.use('/customer', customer)

//  handlebars
const hbs = handlebars.create({
  extname: '.hbs',
  defaultLayout: 'app'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')

app.listen(3000, function () {
  console.log(`Listening on ${PORT}`)
  db.sequelize.sync()
})

module.exports = app
