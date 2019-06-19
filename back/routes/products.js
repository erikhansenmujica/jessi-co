const router = require('express').Router();
const Product = require('../db/models/products');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;



router.get('/:name', function (req, res) {
   let nombre = req.params.name;
   Product.findAll({
       where: {
           name: {
               [Op.like]: "%" + nombre + "%"
           }
       }
   })
       .then((products) => {
           res.json(products)
       })
})

// router.get('/api/products/:category', function (req, res) {
//     let category = req.params.category;
// })

router.get('/:id', function (req, res) {
    let id = req.params.id;
    Product.findByPk({ where: { id: id } })
    .then((product) => res.send(product))
})

module.exports = router;