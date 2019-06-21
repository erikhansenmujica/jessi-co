const router = require('express').Router();
var passport = require('../validations/passport')

router.post('/login',function(req,res,next){console.log("algo"); next()},passport.authenticate("local"), function (req, res) {
    console.log("skereee")
    res.send(req.user)
})

module.exports = router;