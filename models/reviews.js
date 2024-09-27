const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const reviewSchema = new Schema({
    author: {
        type: Schema.ObjectId,
        ref: 'User'
    },

    comment: {
        type: String,
        index: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    }
})
module.exports = mongoose.model('Review', reviewSchema);