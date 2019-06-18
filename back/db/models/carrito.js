const S = require('sequelize');

const db = require('../db');

const Carrito = db.define('carritos', {
  productsID: {
    type: S.NUMBER,
  }
})

Carrito.belongsTo(User)

module.exports = Carrito