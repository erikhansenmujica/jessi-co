const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const productsRoutes = require('./routes/products');
const carritoRoutes = require('./routes/carrito');
const cookieParser = require('cookie-parser');
const session = require("express-session");
const faker = require ("faker")
//const passport = require('./config/passportConfig');
const db = require('./db/db')
const Products = require("./db/models/products")

// var i=0
// while (i<55) {
//     Products.create({
//         name: faker.commerce.productName(),
//           price:  parseInt(faker.commerce.price()),
//           stock: Math.round(Math.random()*2),
//           description: faker.lorem.sentence(),
//           images:faker.image.technics(),
//           reviews : [faker.hacker.phrase(),faker.hacker.phrase()],
//           rating : Math.round(Math.random()*2)
//     })
//     i++
// }

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(cookieParser())
/****Passport configuration****/
app.use(session({
    secret: "cats",
    resave: false,
    saveUninitialized: false
}));

// app.use(passport.initialize());
// app.use(passport.session());
/*****************************/

/*Configuración de rutas*/
app.use('/api/products', productsRoutes);
app.use('/api/carrito', carritoRoutes);
/***********************/


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './public', 'index.html'));
})

app.use(function (req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.sendStatus(err.status || 500);
});

db.sync({ force:false }).then((c)=> console.log(`connected to ${c.config.database} DB`))

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`server started on port ${PORT}`))