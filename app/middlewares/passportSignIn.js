const passport = require("passport");
const localStrategy = require('passport-local').Strategy;
const User = require('../models/User')

passport.use(
    'signin',
    new localStrategy(
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        async (email, password, done) => {
            try {
                const user = await User.findOne({email});
                if(!user){
                    return done(null, false, {message:"User not found"})
                }

                const validate = await user.isValidPassword(password);

                if(!validate){
                    return done(null, false, {message:"Wrong password"})
                }

                return done(null, user, {message:"Logged in successfully!"})
            }
            catch (error) {
                done(error);
            }
        }
    )
);