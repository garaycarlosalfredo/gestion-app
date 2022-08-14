const Team = require('../../../model/Team')
const {error} = require('../../../config/lenguage')
const {errorMessage} = require('../../errorHandle/errorTypes')
const lenguage = 'spanish'

exports.getAllTeamList = async()=>{

    try {
        //Revisar que el usuario registrado sea unico
        let userlist = await Team.find().populate('members')
        return userlist
    } catch (error) {
        console.log("erorr al intentar guardar  un usuario", error)
        res.status(400).send('hubo un error')
    }

}

exports.createTeam = async(root,args)=>{

    //revisar si hay errores

    const {name, members} = args
    try {
        //Revisar que el usuario registrado sea unico
        let team = await Team.findOne({name});
        if(team){
            const teamExist = errorMessage("Equipo ya exsiste")
            console.log(teamExist)
            return teamExist
        }
        //como no existe se crea el equipo
        team = new Team(args)
        //guardar equipo
        await team.save()
        //popular el equipo para respuesta de la creación
        await team.populate('members')
        //retorno el equipo creado
        return {team : team}

    } catch (error) {
        const strError = "error al intentar guardar  un equipo"
        console.log(strError)
        return {message: teamExist}
    }
    
}


exports.resolveTypeTeam =  {
    __resolveType(obj){
        if(obj.message){
            return "errorResponse"
        }
        if(obj.team){
            return "teamSuccessResponse"
        }

    }
}