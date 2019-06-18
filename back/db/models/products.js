const S = require('sequelize');

const db = require('../db');

const Product = db.define('products', {
  name: {
    type: S.STRING,
    allowNull: false,
  },
  price: {
    type: S.NUMBER,
    allowNull: false,
  },
  stock: {
    type: S.NUMBER, 
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
    type : S.NUMBER
  }
})



module.exports = Product