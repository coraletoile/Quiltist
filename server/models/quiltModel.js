const mongoose = require('mongoose')

const Schema = mongoose.Schema


const quiltSchema = new Schema({
    QuiltName: {
        type: String,
        required: true
    },
    CompletionSeasonYear: {
        type: String,
        required: true
    },
    Giftee: {
        type: String,
        required: true
    },
    Pattern: {
        type: String,
        required: false

    },
    Notes: {
        type: String,
        required: false
    },

}, { timestamps: true})

module.exports = mongoose.model('Quilt', quiltSchema)

