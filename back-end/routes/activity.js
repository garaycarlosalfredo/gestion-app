const express = require('express')
const router = express.Router()
const activityController = require('../controllers/activityController')
const auth = require('../middleware/auth')
const {check} = require('express-validator')
//Crear proyecto
// api/proyectos
router.post('/',
    auth,
    [
        check('name','El nombre del proyecto es obligatorio').not().isEmpty()
    ],
    activityController.create
)

//Obtiene todas las actividades del usuario

router.get('/',
    auth,
    activityController.find
)

//Actualiza  vía ID
router.put('/:id',
    auth,
    [
        check('name','El nombre del proyecto es obligatorio').not().isEmpty()
    ],
    activityController.update
)

//Eliminar una actividad
router.delete('/:id',
    auth,
    activityController.delete
)

module.exports = router