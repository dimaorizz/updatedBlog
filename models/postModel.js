const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    author: String,
    title: String,
    description: String,
    text: String,
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('posts', PostSchema);