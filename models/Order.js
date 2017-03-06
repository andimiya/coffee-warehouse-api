'use strict';
module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define('Order', {
    orderStatus: DataTypes.STRING,
    orderTotal: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Order.belongsTo(models.Customer);
        Order.hasMany(models.CoffeeOrder);
      }
    }
  });
  return Order;
};
