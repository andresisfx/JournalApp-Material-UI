import React from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { Grid2,Button, TextField, Typography, Link } from '@mui/material'
import { Google } from '@mui/icons-material'
import { Link as RouterLink } from 'react-router-dom'

export const RegisterPage = () => {
  return (
    <AuthLayout title='Crear cuenta' >
        <form action="">
            <Grid2  container >
                <Grid2 item size={{xs: 12, md: 12}} sx={{ mb: 2 }}>
                  <TextField
                    type="text"
                    label="Nombre completo"
                    placeholder='Jhon Doe'
                    fullWidth
                    
                  />
                  
                </Grid2>
                <Grid2 item size={{xs: 12, md: 12}} sx={{ mb: 2 }}>
                  <TextField
                    type="email"
                    label="Correo"
                    placeholder='correo'
                    fullWidth
                    
                  />
                  
                </Grid2>

                <Grid2 item size={12} sx={{ mb: 2 }}>
                  <TextField
                    type="password"
                    label="contraseña"
                    placeholder='contraseña'
                    fullWidth
                  />
              </Grid2>

              <Grid2 container spacing={1} sx={{mb: 2, mt: 2,flexDirection: 'column',display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                        <Grid2 item size={{xs: 12, sm:12, md: 12}}  sx={{ mb: 1,mt: 1}}>

                          <Button variant='contained' fullWidth>
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
