const express = require('express')
const dbConnnect = require('./config/db')
const cors = require('cors')

//Crear servidor
const app = express();

//Conectar la vase de datos
dbConnnect()

//Habilitar el cors
app.use(cors())

//Habilitar express.json
app.use(express.json({extends: true}))

//Configuro el puerto de la app
const PORT = process.env.PORT || 4000 //Puerto en variable de entorno o 4000

//Definir la página principal
app.get('/',(req,res)=>{
    res.send('Hola mundo')
    }
)

//Importar rutas
app.use('/api/user', require('./routes/user'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/activity', require('./routes/activity'))
app.use('/api/team', require('./routes/team'))
//app.use('/api/tareas', require('./routes/tareas'))

//Arrancar la app
app.listen(PORT, ()=>{
    console.log(`El servidor está corriendo en el puerto ${PORT}`)
    }
)