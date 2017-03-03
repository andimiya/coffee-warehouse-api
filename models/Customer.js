module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    streetAddress: DataTypes.STRING,
    zipcode: DataTypes.INTEGER,
    phone: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Customer.hasMany(models.Order)
      }
    }
  });

  return Customer;
};
