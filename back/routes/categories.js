const express = require('express');
const router = express.Router();
const { Product, Category } = require('../db/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get('/all', function (req, res) {
    Category.findAll()
        .then((category) => {
            res.status(200).send(category)
        })
})
router.get('/:nombre', function (req, res) {

    try {
        Product.findAll({

            include: [{
                model: Category,
                where: {
                    name: req.params.nombre
                }

            }]
        })
        .then((category) => {
            res.status(200).send(category)
        })
    } catch (err) { console.log(err) }
})




module.exports = router;