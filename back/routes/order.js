const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const { Order, Product } = require('../db/models');
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tessiecompany@gmail.com',
        pass: 'tessieplataforma5'
    }
});

router.get('/', function (req, res) {
    Order.findAll({
        include: [{
            model: Product,
        }]
    }).then(orders => res.send(orders))
})


router.post('/', function (req, res) {
    let productsId = [];
    for (let i = 0; i < req.body.data.carrito.length; i++) {
        productsId.push(req.body.data.carrito[i].id)
    }
    Order.create(req.body.data)
        .then(order => order.addProducts(productsId))

    let products = req.body.data.carrito.map(product => product.name);
    let total = 0
    for (let i = 0; i < req.body.data.carrito.length; i++) {
        total += req.body.data.carrito[i].price;
    }
    const mailOptions = {
        from: 'tessiecompany@gmail.com',
        to: req.body.data.email,
        subject: 'Confirmación de compra en Tessie&Co.',
        html: '<h2>Artículos de su compra: </h2>' + products.toString() + `<p><strong>por un total de $ ${total}</strong></p>` + '<br><br><p>Este es un email autómatico. Para comunicarse con Tessie&co, por favor envíe un email a:</p>'
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log("Error al enviar el mail: ", err)
            res.json({
                msg: 'fail'
            })
        }
        else {
            console.log("Mail enviado: ", info);
            res.json({
                msg: 'success'
            })
        }
    });
})

module.exports = router;