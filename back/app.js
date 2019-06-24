const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const productsRoutes = require('./routes/products');
const carritoRoutes = require('./routes/carrito');
const userRoutes = require('./routes/user');
const usersRoutes = require('./routes/users');
const orderRoutes = require('./routes/order');
const addProduct = require('./routes/addProduct')
const cookieParser = require('cookie-parser');
const morgan = require("morgan")
const session = require("express-session");
const passport = require('./validations/passport');
const db = require('./db/db')
const { Product } = require("./db/models")


//object fit
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(cookieParser())
/****Passport configuration****/
app.use(session({
    secret: "cats",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
/*****************************/

/*Configuración de rutas*/
app.use('/api/user', userRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/carrito', carritoRoutes);
app.use('/api/prueba', addProduct)


app.use('/api/user', userRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/order', orderRoutes);

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

db.sync({ force: false }).then((c) => console.log(`connected to ${c.config.database} DB`))

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`server started on port ${PORT}`))