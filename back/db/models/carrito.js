const S = require('sequelize');

const db = require('../db');

const Carrito = db.define('carritos', {
  productsID: {
    type: S.INTEGER, 
  }
})

//Carrito.belongsTo(User)

module.exports = Carrito