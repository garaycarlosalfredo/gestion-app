const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true

    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true

    },
    phone:{
        type: String,
        required: true,
        trim: true,
        unique: true

    },
    password:{
        type: String,
        required: true,
        trim: true

    },
    createDate:{
        type: Date,
        default: Date.now()

    }
})

module.exports = mongoose.model('User', UserSchema)