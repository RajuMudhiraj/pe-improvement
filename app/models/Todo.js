const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    username: { type: String },
    title: { type: String, required: true },
    isCompleted: { type: Boolean, required: true, default: false },
    category: { type: Array },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

module.exports = mongoose.model('Todo', todoSchema)