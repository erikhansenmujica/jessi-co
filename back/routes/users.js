const express = require('express');
const router= express.Router();
const User=require('../db/models/user');


router.post('/register', function (req, res) {
    User.create(req.body)
    .then(user=>res.status(200).send('ok'))
})

module.exports=router