const { Users } = require("../db/models/user")
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    Users.findById(id, function (err, user) {
        done(err, user);
    });
});

passport.use(new LocalStrategy({usernameField :'name', passwordField:"password"},
    function (name, password, done) {
        Users.findOne({ name: name  })
        .then((user)=> {       
            if (!user) {
                console.log("error")
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.autenticate(password)) {
                console.log("error2")
                return done(null, false, { message: 'Incorrect password.' });
            }
            console.log(user)
            return done(null, user);
        })
        .catch(done)
    }
));

module.exports= passport