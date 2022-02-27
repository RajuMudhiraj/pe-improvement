const mongoose = require('mongoose');

const userActivitySchema = mongoose.Schema({
    email:{type:mongoose.Schema.Types.String}

}, { timestamps: true });


module.exports = mongoose.model('UserActivity', userActivitySchema)