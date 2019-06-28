const router = require('express').Router();
const { Product, User } = require('../db/models');


router.get('/:userId', function (req, res) {
    let userId = req.params.userId;
    User.findAll({
        include: [{
            model: Product,
        }]
    }).
        then(user => {
            let selectedUser = user.filter(user => user.id == userId)
            res.json(selectedUser[0].products)
        })
})

router.get('/', function (req, res) {
    User.findAll({
        include: [{
            model: Product,
        }]
    })
        .then(user => res.send(user))
})

router.post('/products/:userId', function (req, res) {
    let userId = req.params.userId;
    User.findOne({ where: { id: userId } })
        .then(user => user.addProducts(req.body.product.id))
        .then(user => res.sendStatus(200))
})

module.exports = router;
