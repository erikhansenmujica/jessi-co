const router = require('express').Router();
const Carrito = require('../db/models');

const asyncLocalStorage = {
    setItem: function (key, value) {
        return Promise.resolve().then(function () {
            localStorage.setItem(key, value);
        });
    },
    getItem: function (key) {
        return Promise.resolve().then(function () {
            return localStorage.getItem(key);
        });
    }
};

router.get('/api/carrito/:userId', function (req, res) {
    let userId = req.params.userId;
    Carrito.findAll({ where: { userId: id } })
        .then((carrito) => res.send(carrito))
})

router.post('storageCarrito', function (req, res) {
    asyncLocalStorage.setItem(req.body).then(carrito=>console.log(carrito))
})
router.post('getCarrito', function (req, res) {
    res.send(localStorage.getItem(req.body));
})



module.exports = router;