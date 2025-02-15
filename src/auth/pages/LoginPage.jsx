import {  Grid2, TextField, Typography } from '@mui/material'

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
          xs={3}
          sx={{ backgroundColor: 'white', padding: 2, borderRadius: 2 }} >

          <Typography variant='h5' sx={{ mb: 1 }}>Login</Typography>

          <form action="">
            <Grid2  container>
              <Grid2 item size={12} sx={{ mb: 2 }}>
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

            </Grid2>
          </form>
        </Grid2>
     </Grid2>
  )
}
