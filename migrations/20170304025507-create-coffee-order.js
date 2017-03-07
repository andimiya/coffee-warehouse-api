'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('CoffeeOrders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      // coffee_ID: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: 'customer',
      //     key: 'id'
      //   }
      // },
      // order_ID: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: 'order',
      //     key: 'id'
      //   }
      // },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('CoffeeOrders');
  }
};
