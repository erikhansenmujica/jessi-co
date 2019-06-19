const router = require('express').Router();
const Product = require('../db/models/products');
const Sequelize= require('sequelize')
const Op = Sequelize.Op;

// router.get('/api/products/:name', function (req, res) {
//     let name = req.params.name;
//     Product.findAll({ where: { name: name } })
//         .then((products) => res.send(products))
// })


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

router.get('/all', function (req, res) {
    Product.findAll({})
        .then((products) => {
            res.json(products)
        })
})

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
    Product.findOne({ where: { id: id } })
        .then(product => res.json(product))
})


module.exports = router;