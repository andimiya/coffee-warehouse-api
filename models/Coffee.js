'use strict';
module.exports = function(sequelize, DataTypes) {
  var Coffee = sequelize.define('Coffee', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    caffeine: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Coffee.hasMany(models.CoffeeOrder)
      }
    }
  })
  return Coffee;
};
