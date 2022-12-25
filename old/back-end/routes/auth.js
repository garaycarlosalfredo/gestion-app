const express = require('express')
const router = express.Router()
const {check} = require('express-validator')
const authController = require('../controllers/authController')
const auth = require('../middleware/auth')

//Iniciar usuario
// api/auth
router.post('/',
    authController.signIn
)

//obtiene el usuario autenticado
router.get('/',
        auth,
        authController.actualUser
    )

module.exports = router