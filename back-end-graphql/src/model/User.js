const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: {
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
    createDate:{
        type: Date,
        default: Date.now(),
        alias: 'Date'

    }
})

module.exports = mongoose.model('User', UserSchema)