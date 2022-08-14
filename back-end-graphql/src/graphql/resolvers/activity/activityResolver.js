const Activity = require('../../../model/Activity')

exports.getActivityList = async(req,res) => {
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