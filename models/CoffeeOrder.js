'use strict';
module.exports = function(sequelize, DataTypes) {
  var CoffeeOrder = sequelize.define('CoffeeOrder', {
    quantity: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        CoffeeOrder.belongsTo(models.Order);
        CoffeeOrder.belongsTo(models.Coffee);
      }
    }
  });
  return CoffeeOrder;
};
