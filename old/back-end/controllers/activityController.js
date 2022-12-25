const Activity = require('../model/Activity')
const {validationResult} = require('express-validator')

exports.create = async(req,res)=>{
    //revisar si hay errores
    const error = validationResult(req)
    
    if(!error.isEmpty()){
        return res.status(400).json({error: error.array()})
    }
    
    try{
        //Crear Actividad
        const activity = new Activity(req.body)

        //Guardar un nuevo actividad
        activity.creator = req.user.id 

        activity.save()
        res.json(activity)

    }catch (error){
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

//Obtiene todas las cactividades del usuario actual

exports.find = async(req,res) => {
    try {

        const {activityId} = req.body

        if(activityId){
            const ActivityIsPresent = await Activity.findById(activityId)

            if(!ActivityIsPresent){
                return res.status(404).json({msg: 'Actividad no encontrado'})
            }
            const activities = await Activity.find({_id : activityId})
            res.json(activities)
        }else{
            const activities = await Activity.find()
            res.json(activities)
        }

    } catch (error) {
        res.status(500).send('Hubo un error')
    }
}

//Actualizar una actividad
exports.update = async(req,res) => {
    //revisar si hay errores
    const errores = validationResult(req)
    if(!errores.isEmpty()){
        return res.status(400).json({errores: errores.array()})
    }

    //extraer la información del proyecto
    const {name, teams} = req.body
    const newActivity = {}

    if(name){
        newActivity.name = name
    }
    if(teams){newActivity.teams = teams}
    
    try {
        //Revisar el id
        let activity = await Activity.findById(req.params.id)

        //si exite el proyecto
        if(!activity){
            return res.status(404).json({msg: 'Actividad no encontrado'})
        }
        
        //verificar el creador
        //if(activity.creator.toString() !== req.user.id){
        //    return res.status(401).json({msg: 'Update no autorizado'})
        //}
     
        //Actualizar
        activity = await Activity.findByIdAndUpdate(
            {_id: req.params.id},
            {$set : newActivity},
            { new: true})
        res.json({activity})

    } catch (error) {
        res.status(500).send('error en el servidor update')
    }

}

//Eliminar una acticidad
exports.delete = async (req,res) => {
    try {
        //Revisar el id
        let activity = await Activity.findById(req.params.id)

        //si exite el actividad
        if(!activity){
            return res.status(404).json({msg: 'Actividad no encontrado'})
        }
        
        //verificar el creador
        //if(activity.creator.toString() !== req.user.id){
        //    return res.status(401).json({msg: 'Update no autorizado'})
        //}
        //Eliminar el actividad
        await Activity.findOneAndRemove({_id: req.params.id})
        res.json({msg: 'Actividad eliminada'})

    } catch (error) {
        res.status(500).send('Error en el servidor')
    }

}