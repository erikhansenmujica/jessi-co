const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes/index')
const cookieParser = require('cookie-parser');
const session = require("express-session");
//const passport = require('./config/passportConfig');
const db = require('./db/db')

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

app.use('/', routes);
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

db.sync({force:false}).then(()=>console.log('Data Base connected: Tessie'))

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`server started on port ${PORT}`))