const router = require('express').Router();
const Carrito = require('../db/models/carrito');

router.get('/api/carrito/:userId', function (req, res) {
    let userId = req.params.userId;
    Carrito.findAll({ where: { userId: id } })
        .then((carrito) => res.send(carrito))
})




module.exports = router;