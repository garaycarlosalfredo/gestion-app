const mongoose = require('mongoose')

require('dotenv').config({path : 'variables.env'})

const dbConnect = async ()=>{
    try {
        await mongoose.connect(process.env.DB_MONGO,{
            useNewUrlParser:true,
            useUnifiedTopology: true
        })
        console.log(`mongodb database connected = ${process.env.DB_MONGO}`)

    } catch (error) {
        console.log(error)
        process.exit(1) //Detiene la app
    }
}

module.exports = dbConnect