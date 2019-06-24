const express = require('express');
const router = express.Router();
const { Product } = require('../db/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.post('/addreview', function (req, res) {
   console.log("SOY EL REQ.BODY", req.body)
    Product.update({
        reviews: Sequelize.fn(
            "array_append",
            Sequelize.col("reviews"),
            req.body.review
        ) 
    },
    {where: {
        id: req.body.productId
    }})
    .then(data=> console.log("SOY LA DATA", data))
})

module.exports = router