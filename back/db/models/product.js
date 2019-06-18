const S = require('sequelize');

const db = require('../db');

const Product = db.define('products', {
  name: {
    type: S.STRING,
    allowNull: false,
  },
  price: {
    type: S.INTEGER,
    allowNull: false,
  },
  stock: {
    type: S.INTEGER, 
  },
  description: {
    type : S.TEXT
  },
  images: {
    type : S.STRING
  },
  reviews : {
    type : S.STRING
  },
  rating : {
    type : S.INTEGER
  }
})

Product.hasMany(Category)


module.exports = Product
