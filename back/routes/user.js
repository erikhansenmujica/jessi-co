const router = require('express').Router();
const Product = require('../db/models/products');
var passport = require('../validations/passport')

router.post('/login',passport.authenticate("local"), function (req, res) {
    console.log("skereee")
    res.send(req.user)
})

 


module.exports = router;