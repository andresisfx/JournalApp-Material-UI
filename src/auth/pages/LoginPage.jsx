import { Link as RouterLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Google } from '@mui/icons-material'
import {  Grid2,Button, TextField, Typography, Link } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { checkingAuthentication ,startGoogleSignIn} from '../../store/auth'
import { useMemo } from 'react'

export const LoginPage = () => {
  const dispatch = useDispatch();

  const {status}= useSelector(state => state.auth)

  const {email, password, onInputChange}= useForm({
    email: 'andres@gmail.com',
    password: '123456' 

  });
  
  
  const onSubmit = (event) => {
    event.preventDefault();
    console.log({email, password})
    dispatch(checkingAuthentication());
    
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn())
  }

  const authenticating= useMemo(() => dispatch(checkingAuthentication()), [dispatch])
  return (
    <AuthLayout title='Login' >
        <form  onSubmit={onSubmit}>
            <Grid2  container>
                <Grid2 item={true} size={{xs: 12, md: 12}} sx={{ mb: 2 }}>
                  <TextField
                    type="email"
                    label="Correo"
                    placeholder='correo'
                    fullWidth
                    name='email'
                    value={email}
                    onChange={onInputChange}
                    
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
                  />
              </Grid2>

              <Grid2 container spacing={2} sx={{mb: 2, mt: 2,}} >
                  <Grid2 item size={{xs: 12, sm:6, md: 6}}  sx={{ mb: 1,mt: 1}}>

                    <Button type='submit' variant='contained' fullWidth>
                      Login
                    </Button>

                  </Grid2>

                  <Grid2 item size={{xs: 12,sm: 6, md: 6}}  sx={{ mb: 1,mt: 1 }} >
                    
                    <Button variant='contained' fullWidth onClick={onGoogleSignIn}>
                      <Google/>
                      <Typography>Google</Typography>
                    </Button>

                  </Grid2>
                  <Grid2 container direction='row' >
                    <Typography sx={{ mr: 1 }}>¿No tienes cuenta?</Typography>
                    <Link component={RouterLink} color='inherit' to="/auth/register">
                      Regístrate
                    </Link>

                  </Grid2>
              </Grid2>

            </Grid2>
          </form>
    </AuthLayout>
  )
}
