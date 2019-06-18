const S = require("sequelize");
const User = require("./user");
const Product = require("./products");

const db = require("../db");

const Carrito = db.define("carritos", {
  productsID: {
    type: S.INTEGER
  }
});

Carrito.belongsTo(User);
Carrito.hasMany(Product);

module.exports = Carrito;
