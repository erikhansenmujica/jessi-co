const router = require('express').Router();
const Product = require('../db/models/products');
const Sequelize= require('sequelize')
const Op = Sequelize.Op;


// router.get('/api/products/:name', function (req, res) {
//     let name = req.params.name;
//     Product.findAll({ where: { name: name } })
//         .then((products) => res.send(products))
// })


// router.get('/api/products/:category', function (req, res) {
//     let category = req.params.category;
// })

router.get('/all', function (req, res) {
    Product.findAll({
        where:{
            id:{
                [Op.lt]:5
            }
        }
    })
        .then((products) => {
            res.json(products)
        })
 })
 
router.get('/:id', function (req, res) {
    let id = req.params.id;
    Product.findByPk({ where: { id: id } })
    .then((product) => res.send(product))
})

module.exports = router;