const router = require('express').Router();
const {Carrito} = require('../db/models');

router.get('/api/carrito/:userId', function (req, res) {
    let userId = req.params.userId;
    Carrito.findAll({ where: { userId: id } })
        .then((carrito) => res.send(carrito))
})

router.post('/storageCarrito', function (req, res) {
    console.log(req.body)
    res.send(localStorage.setItem(req.body))
})
router.post('/getCarrito', function (req, res) {
    res.send(localStorage.getItem(req.body));
})



module.exports = router;