const {ApolloError} = require("apollo-server")
const User = require('../../../model/User')
const bcryptjs = require('bcryptjs')
const {errorMessage} = require('../../errorHandle/errorTypes')

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

exports.signUp = async(root,args)=>{

    console.log(args)
    //revisar si hay errores

    //Extraer email y password
    const {email, password} = args

    try {
        //Revisar que el usuario registrado sea unico
        let checkUser = await User.findOne({email});

        if(checkUser){
            const userExist = "Usuario ya exsiste"
            console.log(userExist)
            //return userExist
            return new ApolloError('userExist',500)
        }

        //guardar nuevo usuario
        newUser = new User(args)

        //Hashear el password
        const salt = await bcryptjs.genSalt(10)
        newUser.password = await bcryptjs.hash(password, salt)

        //guardar usuario
        await newUser.save()

        /*
        //Crear y firmar el jwt
        const payload = {
            user:{
                id: user.id
            }
        }

        //Firmar el jwt
        jwt.sign(payload,process.env.SECRETA,{
                expiresIn: 3600 //1 hora
            },(error, token)=>{
                if(error)throw error

                //mensaje de confirmación
                console.log("Usuario creado correctamente")
                return res.json({token})

            }
        )*/

        return {user : newUser}

    } catch (error) {
        console.log("erorr al intentar guardar  un usuario : ", error)
        return({message: 'error'})
    }
}

exports.signIn = async(root,args)=>{

    console.log(args)
    //revisar si hay errores

    //Extraer email y password
    const {email, password} = args

    try {

        //Hashear el password
        const salt = await bcryptjs.genSalt(10)
        passwordBcypt = await bcryptjs.hash(password, salt)

        let checkUser = await User.findOne({email,passwordBcypt});

        if(!checkUser){
            const userExist = "Usuario no exsiste"
            console.log(userExist)
            //return userExist
            return new ApolloError('userNoExist',500)
        }

        //guardar nuevo usuario
        //newUser = new User(args)



        //guardar usuario
        //await newUser.save()

        /*
        //Crear y firmar el jwt
        const payload = {
            user:{
                id: user.id
            }
        }

        //Firmar el jwt
        jwt.sign(payload,process.env.SECRETA,{
                expiresIn: 3600 //1 hora
            },(error, token)=>{
                if(error)throw error

                //mensaje de confirmación
                console.log("Usuario creado correctamente")
                return res.json({token})

            }
        )*/

        return {user : checkUser}

    } catch (error) {
        console.log("erorr al intentar guardar  un usuario : ", error)
        return({message: 'error'})
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