const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const { body } = require('express-validator');

const userSchema = mongoose.Schema({
    username: { type: String, },
    password: { type: String },
    email: {
        type: String,
        validate: {
            validator: function (v) {
                return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v));
            },
            //message to return if validation fails
            message: props => `${props.value} is not a valid email`
        },
        unique: true
    },
    phone: {
        type: String,
        validate: {
            validator: function (v) {
                return (/^\d{10}$/.test(v));
            },
            //message to return if validation fails
            message: props => `${props.value} is not a valid phone number`
        },
    },
    roles: { type: Array },

}, { timestamps: true });


module.exports = mongoose.model('User', userSchema)