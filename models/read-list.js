const mongoose = require('mongoose')
const bookSchema = require('./book')

const readListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    
    books: [bookSchema],
}, {
    timestamps: true
})


module.exports = mongoose.model('ReadList', readListSchema)