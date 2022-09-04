const {ApolloError} = require("apollo-server")
const User = require('../../../model/User')
const bcryptjs = require('bcryptjs')
const {errorMessage} = require('../../errorHandle/errorTypes')
const jwt = require('jsonwebtoken');
const { applySpec, mergeLeft } = require("ramda");

TOKEN_EXPIRATION_TIME_VALUE = process.env.TOKEN_EXPIRATION_TIME
TOKEN_SECRET_WORD_VALUE = process.env.TOKEN_SECRET_WORD

exports.getAllUserList = async()=>{

    try {
        //Revisar que el usuario registrado sea unico
        let userlist = await User.find()
        console.log(userlist)
        return userlist

    } catch (error) {
        console.log("erorr al intentar guardar  un usuario", error)
        res.status(400).send('hubo un error')
    }

}

exports.resolveTypeUser =  {
    __resolveType(obj){
        if(obj.message){
            return "errorResponse"
        }
        if(obj.user){
            return "userSuccessResponse"
        }

    }
}