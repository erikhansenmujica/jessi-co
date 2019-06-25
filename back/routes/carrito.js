const router = require('express').Router();
const { Carrito, Product } = require('../db/models');


router.get('/:userId', function (req, res) {
    let userId = req.params.userId;
    Carrito.findAll({ where: { userId: userId } }, {
        include: [{
            model: Product,
        }]
    }).then(carrito => res.send(carrito))
})

router.get('/', function (req, res) {
    Carrito.findAll({
        include: [{
            model: Product,
        }]
    })
        .then(carrito => res.send(carrito))
})

router.post('/:userId', function (req, res) {
    let userId = req.params.userId;
    Carrito.create({ where: { userId: userId } })
        .then(carrito => carrito.addProduct(req.body.product))
})

module.exports = router;
