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

    Product.findAll()
        .then((category) => {
            res.status(200).send(category)
        })
})




module.exports = router;