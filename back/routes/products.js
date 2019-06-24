const express = require('express');
const router = express.Router();
const { Product } = require('../db/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get('/all', function (req, res) {
<<<<<<< HEAD
    
    Product.findAll()
    .then((products) => {
        res.json(products)
    })
=======

   Product.findAll()
        .then((products) => {
            res.status(200).send(products)
        })
>>>>>>> 364b5596db7375bffa7d7b8ec7625a4432d9af67
})

router.get('/id/:id', function (req, res) {
    let id = req.params.id;
    Product.findOne({ where: { id: id } })
        .then(product => res.json(product))
})

router.get('/:name', function (req, res) {
    let nombre = req.params.name.toLowerCase();
    Product.findAll({
        where: {
            name: Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('name')), 'LIKE', '%' + nombre + '%')
        }
    })
        .then((products) => {
            return res.json(products)
        })
})


module.exports = router;
