const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User')

passport.use(
    'signup',
    new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        async (email, password, done) => {
            try {
                const user = await User.create({ email, password });
                

                return done(null, user)
            }
            catch (error) {
                done(error);
            }
        }
    )
);