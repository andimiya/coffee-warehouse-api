module.exports = function(sequelize, DataTypes) {
  var CoffeeOrder = sequelize.define("CoffeeOrder", {
    coffee_ID: DataTypes.INTEGER,
    order_ID: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate: function(models) {
        CoffeeOrder.belongsTo(models.Order);
        CoffeeOrder.belongsTo(models.Coffee);
      }
    }
  });

  return Order;
};
