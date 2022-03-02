const jwt = require('jsonwebtoken')

module.exports = function(req, res,next){
    //Leer el token del header
    //const token = req.header('x-auth-token')
    const token = req.header('Authorization')

    console.log(token)

    //Revisar si no hay toquen
    if(!token){
        return res.status(401).json({msg: 'No hay token permiso no autorizado'})
    }
    //validar el token
    try {
        const cifrado = jwt.verify(token.slice(7), process.env.SECRETA)//Se quitan los primeros 7 caracteres con slice pertenecientes a "Bearer "
        req.user = cifrado.user
        next()
    } catch (error) {
        res.status(401).json({msg: 'Token no válido'})
    }
}