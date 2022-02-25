const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const {check} = require('express-validator')

//iniciar sesion usuario

// api/usuario
router.post('/',
[
    check('name', 'Elnombre es obligatorio').not().isEmpty(),
    check('email','Agregar un email válido').isEmail(),
    check('password', 'El pasword debe ser mínimo de 6 caracteres').isLength({min: 6 })
],
    userController.signUp
)

module.exports = router