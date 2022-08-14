const mongoose  = require("mongoose")

const ActivitySchema = mongoose.Schema({
    name:{
        type: String,
        require: true,
        trim: true,
        alias: 'String'
    },
    creator:{
        type: String,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        alias: 'String'
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
    teams:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        alias: '[Team]'
    }]

})
module.exports = mongoose.model('Activity',ActivitySchema)