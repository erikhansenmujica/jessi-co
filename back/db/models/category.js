const S = require("sequelize");
const Product = require("./products");
const db = require("../db");

const Category = db.define("categories", {
  name: {
    type: S.STRING,
  }
});

//Category.hasMany(Product)

module.exports = Category;
