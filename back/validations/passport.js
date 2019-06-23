const  Users  = require("../db/models/user")
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;
passport.serializeUser(function (user, done) {
    console.log("serialize")
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    console.log("deserialize")
    Users.findByPk(id)
    .then( user=> {
        done(err, user);
    })
    .catch(done)
});

passport.use(new LocalStrategy({usernameField :'email', passwordField:"password"},
function (email, password, done) {
        Users.findOne({where:{ email: email}  })
        .then((user)=> {    
            if (!user) {
                console.log("error")
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.autenticate(password)) {
                console.log("error2")
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        })
        .catch(done)
    }
));

module.exports= passport