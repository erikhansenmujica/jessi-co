const express = require("express");
const router = express.Router();
const { Product } = require("../db/models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

// router.get('/all', function (req, res) {
//    Product.findAll()
//         .then((products) => {
//             res.status(200).send(products)
//         })
// })

router.get('/id/:id', function (req, res) {
  let id = req.params.id;
  Product.findOne({ where: { id: id } })
    .then(product => res.json(product))
})

router.post('/update/stock', function (req, res) {

  Product.findOne({ where: { id: req.body.id } })
    .then(product =>
      product.update({
        stock: product.stock-req.body.quantity
      }))
    .then(() =>
      Product.findAll()
        .then((products) => {
          res.status(200).send(products)
        })
    )
})

router.get('/:name', function (req, res) {
  let nombre = req.params.name.toLowerCase();
  Product.findAll({
    where: {
      name: Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('name')), 'LIKE', '%' + nombre + '%'),
      stock: {
        [Op.gt]: 1
      }
    }

  })
    .then((products) => {
      return res.json(products)
    })
})

module.exports = router;
