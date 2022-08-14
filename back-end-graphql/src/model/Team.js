const mongoose = require('mongoose')

const TeamSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        alias: 'String'
    },
    status: {
        type: Boolean,
        default: false,
        alias: 'Boolean'
    },
    created:{
        type: Date,
        default: Date.now(),
        alias: 'Date'
    },
    updated:{
        type: Date,
        default: Date.now(),
        alias: 'Date'
    },
    members:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        alias: '[User]'
        }]
})

module.exports = mongoose.model('Team', TeamSchema)