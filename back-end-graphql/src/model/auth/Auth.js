const mongoose = require('mongoose')

const AuthSchema = mongoose.Schema({
    token: {
        type: String,
        required: true,
        trim: true,
        alias: 'String'

    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        alias: 'String'

    },
    phone:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        alias: 'String'

    },
    password:{
        type: String,
        required: true,
        trim: true,
        alias: 'String'

    },
    token:{
        type: String,
        required: false,
        trim: true,
        alias: 'String'

    },
    createDate:{
        type: Date,
        default: Date.now(),
        alias: 'Date'

    }
})

module.exports = mongoose.model('Auth', AuthSchema)