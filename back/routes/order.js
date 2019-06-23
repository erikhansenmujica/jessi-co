const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { Order } = require('../db/models');
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tessiecompany@gmail.com',
        pass: 'tessieplataforma5'
    }
});


router.post('/neworder', function (req, res) {
    let products = req.body.data.carrito.map(product => product.name);
    let total = 0
    for (let i = 0; i < req.body.data.carrito.length; i++) {
        total += req.body.data.carrito[i].price;
    }
    console.log(total)
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