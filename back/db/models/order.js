const S = require('sequelize');
const db = require('../db');

const Order = db.define('orders', {
  status: {
    type: S.STRING,
    allowNull: false,
  },
  address: {
    type: S.STRING,
    allowNull: false,
  },
  date: {
    type: S.DATE, 
  }
})

module.exports = Order
