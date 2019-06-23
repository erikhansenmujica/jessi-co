const router = require('express').Router();
var passport = require('../validations/passport')


router.post('/login',passport.authenticate("local"), function (req, res) {
    res.send(req.user)
})


router.get('/logout', function (req, res) {
    console.log("skereeeasdjalfhlkghlkhflksFNLKSDFNLKFNkDFN.KSDFNKSADFNAKSNFLJKSFNSDLKJFNBLKFLSKDJNLSKDNLK")
    req.logout()
})

module.exports = router;