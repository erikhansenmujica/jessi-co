const router = require('express').Router();
const {Carrito} = require('../db/models');

router.get('/api/carrito/:userId', function (req, res) {
    let userId = req.params.userId;
    Carrito.findAll({ where: { id: userId } })
        .then((carrito) => res.send(carrito))
})

router.post('/storageCarrito', function (req, res) {
   try{
      localStorage.setItem(req.body)
   }catch(err){
       console.log(err)
   }
    })
router.post('/getCarrito', function (req, res) {
    res.send(localStorage.getItem(req.body));
})



module.exports = router;