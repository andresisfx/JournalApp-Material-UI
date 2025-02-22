import React , { useState } from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { Grid2,Button, TextField, Typography, Link } from '@mui/material'
import { Google } from '@mui/icons-material'
import { Link as RouterLink } from 'react-router-dom'
import { useForm } from '../../hooks'
import { useDispatch ,useSelector} from 'react-redux'
import { startCreatingUserWithEmailPassword } from '../../store/auth'
import { Alert } from 'bootstrap'


const initialForm = {
  email: 'andres@gmail.com',
  password: '123456' ,
  displayName: 'Jhon Doe'

}
export const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmited, setFormSubmited] = useState(false)
  const {status,errorMessage}= useSelector(state => state.authStore)
  isCheckingAuthenticated= useMemo(() => status === 'authenticated', [status])
  
  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmited(true);
    dispatch(startCreatingUserWithEmailPassword(formState));
    console.log("submited")
    
  }
  const formValidations={
    email: [(value) => value.includes('@'), 'El correo debe tener un @.'],
    password: [(value) => value.length >= 6, 'El password debe tener más de 6 letras.'],
    displayName: [(value) => value.length >= 1, 'El nombre es obligatorio.']
  }
  const {displayName,email, password, onInputChange,formState,formValidation,displayNameValid,emailValid,passwordValid,isFormValid}= useForm(initialForm,formValidations);
 

  return (
    <AuthLayout title='Crear cuenta' >
      
        <form action="" onSubmit={onSubmit}>
            <Grid2  container >
                <Grid2 item size={{xs: 12, md: 12}} sx={{ mb: 2 }}>
                  <TextField
                    type="text"
                    label="Nombre completo"
                    placeholder='Jhon Doe'
                    fullWidth
                    name='displayName'
                    value={displayName}
                    onChange={onInputChange}
                    error={!!displayNameValid && formSubmited}
                    helperText={displayNameValid}
                    
                  />
                  
                </Grid2>
                <Grid2 item size={{xs: 12, md: 12}} sx={{ mb: 2 }}>
                  <TextField
                    type="email"
                    label="Correo"
                    placeholder='correo'
                    fullWidth
                    name='email'
                    value={email}
                    onChange={onInputChange}
                    error={!!emailValid && formSubmited}
                    helperText={emailValid}
                    
                  />
                  
                </Grid2>

                <Grid2 item size={12} sx={{ mb: 2 }}>
                  <TextField
                    type="password"
                    label="contraseña"
                    placeholder='contraseña'
                    fullWidth
                    name='password'
                    value={password}
                    onChange={onInputChange}
                    error={!!passwordValid && formSubmited}
                    helperText={passwordValid}
                  />
              </Grid2>

              <Grid2 container spacing={1} sx={{mb: 2, mt: 2,flexDirection: 'column',display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                        <Grid2 item size={{xs: 12, sm:12, md: 12}}  sx={{ mb: 1,mt: 1}}>

                         <Alert 
                         severity="error"
                         display={!!errorMessage? '': 'none'} 
                         >
                          
                          {errorMessage}

                         </Alert>

                        </Grid2>
                        <Grid2 item size={{xs: 12, sm:12, md: 12}}  sx={{ mb: 1,mt: 1}}>

                          <Button variant='contained' 
                          fullWidth type='submit'
                          disabled={isCheckingAuthenticated}
                          >
                            Registrar cuenta 
                          </Button>

                        </Grid2>
                 
                        <Grid2 container direction='row' justifyContent='end'>
                          <Typography variant='body2'>¿ Ya tienes cuenta?</Typography>
                              <Link component={RouterLink} color='inherit' to="/auth/login">
                              Ingresar
                              </Link>

                         </Grid2>
              </Grid2>

            </Grid2>
          </form>
    </AuthLayout>
  )
}
