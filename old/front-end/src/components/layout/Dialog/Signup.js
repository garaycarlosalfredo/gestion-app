import React , {useState, useEffect}from 'react';
//React Router Dom
import { useNavigate } from 'react-router-dom';
//Material UI
  //Material UI-Dialog
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
  //Material UI-Alert
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

//Service
import {createUser,axiosGetUser} from '../../../service/authService'
//Util
import {checkResponseNok} from '../../../util/auth'
//Redux
import {userSetRedux,actionSignUp} from '../../../redux/actions/userActions'
import { useDispatch , useSelector} from 'react-redux';

const Signup = () => {

    let navigate = useNavigate();    //Redux
    //Redux
      //Setear en Readux
    const dispatch = useDispatch();
    const userSignUp = u => dispatch(actionSignUp(u))
  
    const [open, setOpen] = React.useState(false);
    const [user, setUser] = useState({})
    const [submitted, setSubmitted] = useState(false);
    const [backResponse, setBackResponse] = useState(null);

    //Manejo apertura del Dialog
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    //Manejo cierre del Dialog
    const handleClose = () => {
      setOpen(false);
    };

    //Manejo del envío del formulario
    const onSuscribe = async()=>{  
      if(checkRequired())return      
      //const response = await createUser(user)
      const response = await userSignUp(user)

      if(checkResponseNok(response)){ //Si hubo un error deja el formulario visible y muersta errores
        if(response.data.errors){
          setBackResponse(response.data.errors)
        }else{
          setBackResponse([response.data])
        }
        return
      }

      //handleClose()//Cierra el Dialog
      navigate(response.navigate)//Si el usuario fué encontrado se redirecciona a main
    }

    //Chequeo básico de variables del formulario
    const basicValidation = (value)=>{ //Verificación básica de campos (null,undefined,'')
      if(value === undefined || value === null || value.trim() === ''){return true}
      return false
    }

    //Verificación de las variables del formulario
    const checkRequired = ()=>{ //Verifica los campos necesarios
      setSubmitted(true);        
      if(basicValidation(user.name)){return true}
      if(basicValidation(user.password)){return true}
      if(basicValidation(user.email)){return true}
      if(basicValidation(user.phone)){return true}
      return false
    }

    //Manejo del hook del formulario
    const onInputChange = (e, name) => {  //Actualiza los campos de la peticiópn
      const val = (e.target && e.target.value) || '';
      let _user = {...user};
      _user[`${name}`] = val;
      setUser(_user);
    }

  
    return (
      <div>
        <Button variant="outlined" sx={{ my: 2, color: 'white', display: 'block' }} onClick={handleClickOpen}>
          Crear cuenta
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Para crear una cuenta.
            </DialogContentText>
            <TextField
              error = { submitted && basicValidation(user.name)}
              helperText={(submitted && basicValidation(user.name))?"Incorrect entry.":null}
              autoFocus
              margin="dense"
              id="name"
              label="Nombre"
              type="text"
              fullWidth
              variant="standard"
              onChange={(e) => onInputChange(e, 'name')} 
            />              
            <TextField
              error = { submitted && basicValidation(user.phone)}
              helperText={(submitted && basicValidation(user.phone))?"Incorrect entry.":null}
              autoFocus
              margin="dense"
              id="phone"
              label="Teléfono"
              type="text"
              fullWidth
              variant="standard"
              onChange={(e) => onInputChange(e, 'phone')} 
            /> 
            <TextField
              error = { submitted && basicValidation(user.email)}
              helperText={(submitted && basicValidation(user.email))?"Incorrect entry.":null}
              autoFocus
              margin="dense"
              id="email"
              label="Email"
              type="email"
              fullWidth
              variant="standard"
              onChange={(e) => onInputChange(e, 'email')} 
            />            
            <TextField
              error = { submitted && basicValidation(user.password)}
              helperText={(submitted && basicValidation(user.password))?"Incorrect entry.":null}
              autoFocus
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
              variant="standard"
              onChange={(e) => onInputChange(e, 'password')}
              
            />

            {(backResponse !== null && backResponse !== undefined && submitted)
            ?
              <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="error">
                  <AlertTitle>Error en el formulario</AlertTitle>
                  <ul>
                    {backResponse.map(function(element){
                      return <li key={element.msg}>{element.msg}</li>
                    })}
                  </ul>                  
                </Alert>             
              </Stack>
            :null}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={(e) => onSuscribe()}>Subscribe</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}
 
export default Signup;
