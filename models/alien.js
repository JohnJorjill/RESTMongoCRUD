const mongoose = require('mongoose')

const alienSchema = new mongoose.Schema({ // creata a nosql schema for aliens
    name: {
        type: String,
        required: true
    },
    tech: {
        type: String,
        required: true
    },
    sub: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model('Alien',alienSchema)