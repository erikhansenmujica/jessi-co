const Carrito = require('./carrito')
const Product = require('./products')
const Category = require('./category')

Category.belongsToMany(Product, {through: 'ProductCategory'})
Product.belongsToMany(Category, {through: 'ProductCategory'})


module.exports= {
    Category, Product, Carrito
}