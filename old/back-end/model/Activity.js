const mongoose  = require("mongoose")

const ActivitySchema = mongoose.Schema({
    name:{
        type: String,
        require: true,
        trim: true
    },
    creator:{
        type: String,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    created:{
        type: Date,
        default: Date.now()
    },
    updated:{
        type: Date,
        default: Date.now()
    },
    teams:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
    }]

})
module.exports = mongoose.model('Activity',ActivitySchema)