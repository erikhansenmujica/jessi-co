const S = require('sequelize');
const db = require('../db');

const Carrito = db.define('carritos', {
  productsId: {
    type: S.INTEGER,
  }
})

module.exports = Carrito
