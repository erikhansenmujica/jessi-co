const router = require('express').Router();
const Product = require('../db/models/product');


router.get('/api/products/:name', function (req, res) {
    let name = req.params.name;
    Product.findAll({ where: { name: name } })
        .then((products) => res.send(products))
})


// router.get('/api/products/:category', function (req, res) {
//     let category = req.params.category;
// })

router.get('/api/products/:id', function (req, res) {
    let id = req.params.id;
    Product.findByPk({ where: { id: id } })
    then((product) => res.send(product))
})

module.exports = router;