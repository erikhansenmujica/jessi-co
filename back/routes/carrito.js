const router = require('express').Router();
const Carrito = require('../db/models/carrito');

router.get('/api/carrito/:userId', function (req, res) {
    let userId = req.params.userId;
    Carrito.findAll({ where: { userId: id } })
        .then((carrito) => res.send(carrito))
})

router.post('/api/carrito/storageCarrito', function (req, res) {
    localStorage.setItem(req.body);
})
router.post('/api/carrito/getCarrito', function (req, res) {
    res.send(localStorage.getItem(req.body));
})



module.exports = router;