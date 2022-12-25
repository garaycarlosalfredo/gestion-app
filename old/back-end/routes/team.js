const express = require('express')
const router = express.Router()
const teamController = require('../controllers/teamController')
const auth = require('../middleware/auth')
const {check} = require('express-validator')
//Crear proyecto
// api/proyectos
router.post('/',
    auth,
    [
        check('name','El nombre del proyecto es obligatorio').not().isEmpty()
    ],
    teamController.create
)

// api/proyectos
/*router.post('/add-member',
    auth,
    [
        check('memberId','El nombre del proyecto es obligatorio').not().isEmpty(),
        check('teamId','El nombre del proyecto es obligatorio').not().isEmpty()
    ],
    teamController.addMember
)*/
//Actualiza  vía ID
router.put('/:id',
    auth,
    [
        check('name','El nombre del proyecto es obligatorio').not().isEmpty()
    ],
    teamController.update
)

//Obtiene todas las actividades del usuario

router.get('/',
    auth,
    teamController.find
)



//Eliminar una actividad
router.delete('/:id',
    auth,
    teamController.delete
)

module.exports = router