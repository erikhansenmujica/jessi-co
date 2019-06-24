const express = require('express');
const router= express.Router();
const { User }=require('../db/models');


router.post('/register', function (req, res) {
    User.create(req.body)
    .then(user=>res.status(200).send(user))
})

module.exports=router