import { Link as RouterLink } from 'react-router-dom'
import { Google } from '@mui/icons-material'
import {  Grid2,Button, TextField, Typography, Link } from '@mui/material'

export const LoginPage = () => {
  return (
     <Grid2
     container
     spacing={0}
     direction="column"
     alignItems="center"
     justifyContent="center"
     sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
     >
        <Grid2 item
          className='box-shadow'
         size={{xs: 12, sm: 6, md: 4}}
          sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }} >

          <Typography variant='h5' sx={{ mb: 1 }}>Login</Typography>

          <form action="">
            <Grid2  container>
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

              <Grid2 container spacing={2} sx={{mb: 2, mt: 2,}} >
                  <Grid2 item size={{xs: 12, sm:6, md: 6}}  sx={{ mb: 1,mt: 1}}>

                    <Button variant='contained' fullWidth>
                      Login
                    </Button>

                  </Grid2>

                  <Grid2 item size={{xs: 12,sm: 6, md: 6}}  sx={{ mb: 1,mt: 1 }} justifyContent='end'>
                    
                    <Button variant='contained' fullWidth>
                      <Google/>
                      <Typography>Google</Typography>
                    </Button>

                  </Grid2>
                  <Grid2 container direction='row' justifyContent='end'>
                    <Link component={RouterLink} color='inherit' to="/auth/register">
                      ¿No tienes cuenta?
                    </Link>

                  </Grid2>
              </Grid2>

            </Grid2>
          </form>
        </Grid2>
     </Grid2>
  )
}
