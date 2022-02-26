const Team = require('../model/Team')
const Activity = require('../model/Activity')
const User = require('../model/User')
const {validationResult} = require('express-validator')
// Crea una nueva Team

exports.create = async(req,res) => {
    //revisar si hay errores
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    //Extraer el team
    const {team} = req.body

    try {

      //Creamos el equipo
        const team = new Team(req.body)
        await team.save()        
        res.json({team})      

    } catch (error) {
        res.status(500).send('Hubo un error')
    }
}

/*
exports.addMember = async(req,res) => {
    //revisar si hay errores
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    //Extraer el team
    const {teamId, memberId} = req.body

    try {
        console.log('team',teamId)
        console.log('memberId',memberId)

        const memberIsPresent = await User.findById(memberId)

        if(!memberIsPresent){
            return res.status(404).json({msg: 'Usuario no encontrado'})
        }

        //Revisar si el team es del user
        //verificar el creador
        //if(teamIsPresent.creador.toString() !== req.user.id){
        //    return res.status(401).json({msg: 'No autorizado'})
        //}

        const teamIsPresent = await Team.findById(teamId)

        if(!teamIsPresent){
            return res.status(404).json({msg: 'Equipo no encontrado'})
        }

        const alreadyIsInTheTeam = teamIsPresent.members.find(id => id.equals(memberIsPresent._id))

        if(alreadyIsInTheTeam){
            return res.status(404).json({msg: 'El usuario ya se enecuentra en equipo'})
        }
        
        let updatedTeam = {}
        
        updatedTeam = teamIsPresent
        updatedTeam.members.push(memberIsPresent._id)

        updatedTeam = await Team.findByIdAndUpdate(
            updatedTeam._id,
            updatedTeam,
            {new: true}
        )

        console.log('memberId',memberId)
        res.json({updatedTeam})
        
    

    } catch (error) {
        res.status(500).send('Hubo un error al agregar el usuario al equipo')
    }
}*/

//Obtiene las tareas por team

exports.find = async(req,res)=>{
    //Extraer el team

    try {
        const {teamId} = req.body
        if(teamId){
            const teamIsPresent = await Team.findById(teamId)

            if(!teamIsPresent){
                return res.status(404).json({msg: 'Equipo no encontrado'})
            }
        }
        
        //Revisar si el team es del user
        //verificar el creador
        //if(teamIsPresent.creator.toString() !== req.user.id){
        //    return res.status(401).json({msg: 'No autorizado'})
        //}

        //obtener tareas por team
        const teamAll = await Team.find()
        res.json({teamAll})

    } catch (error) {
        
        res.status(500).send('Hubo un error')
    }


}

//Actualizar Team

exports.update = async(req,res) => {
    try {
        const {name, status, members} = req.body

        //Si tarea existe o no
        let team = await Team.findById(req.params.id)
        
        if(!team){
            return res.status(404).json({msg: 'Equipo no encontrado'})
        }

        //Extraer team
        //const teamIsPresent = await Activity.findById(team)
        
        //Revisar si el team es del user
        //verificar el creador
        //if(teamIsPresent.creador.toString() !== req.user.id){
        //    return res.status(401).json({msg: 'No autorizado'})
        //}

        console.log("OK")
        //Crear objeto con nueva tarea
        let updatedTeam = team

        if(name)updatedTeam.name = name
        if(status)updatedTeam.status = status
        if(members)updatedTeam.members = members
        updatedTeam.updated = Date.now()
        
        updatedTeam = await Team.findByIdAndUpdate(
            {_id: req.params.id},
            updatedTeam,
            {new: true}
            )

        res.json({updatedTeam})

    } catch (error) {
        
        res.status(500).send('Hubo un error')
    }
}


//Eliminar una tarea

exports.delete = async (req, res)=>{
    try {
        //const {team} = req.body

        //Si tarea existe o no
        let team = await Team.findById(req.params.id)
        
        if(!team){
            return res.status(404).json({msg: 'No se encontró el equipo'})
        }

        //Extraer team
        //const teamIsPresent = await Activity.findById(team)
        
        //Revisar si el team es del user
        //verificar el creador
        //if(teamIsPresent.creador.toString() !== req.user.id){
        //    return res.status(401).json({msg: 'No autorizado'})
        //}

       //Eliminar
       await Team.findByIdAndRemove({_id: req.params.id})
       res.json({msg: 'Team Eliminada'})

    } catch (error) {
        
        res.status(500).send('Hubo un error')
    }   
}