const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    username: {type:String, required: true},
    title:{type:String, required: true},
    isCompleted:{type:Boolean, required:true, default:false},
    category:{type:Array}
},{timestamps:true});

module.exports = mongoose.model('Todo', todoSchema)