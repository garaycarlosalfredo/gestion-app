const mongoose = require('mongoose')

const TeamSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    status: {
        type: Boolean,
        default: false
    },
    created:{
        type: Date,
        default: Date.now()
    },
    updated:{
        type: Date,
        default: Date.now()
    },
    members:[{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
})

module.exports = mongoose.model('Team', TeamSchema)