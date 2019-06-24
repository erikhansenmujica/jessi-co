const express = require('express'); 
const router = express.Router();
const { Product } = require('../db/models');
const Sequelize = require('sequelize');

router.post('/add', function(req, res){
    Product.create(req.body)
    .then(()=>res.status(200).send('ok/'))
})

module.exports= router