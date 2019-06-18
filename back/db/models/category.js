const S = require('sequelize');
const Product = require('./products')
const db = require('../db');

const Category = db.define('categories', {
  name: {
    type: S.STRING,
    allowNull: false,
  }
})

//Category.belongsTo(Product)

module.exports = Category