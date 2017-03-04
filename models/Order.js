module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define("Order", {
    orderStatus: DataTypes.STRING,
    orderTotal: DataTypes.STRING
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
