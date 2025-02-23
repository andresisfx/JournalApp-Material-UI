

import { StarOutline, StarOutlined } from '@mui/icons-material'
import { Grid2, Typography } from '@mui/material'
import React from 'react'

export const NothingSelectedView = () => {
  return (
    <Grid2
    className='animate__animated animate__fadeIn '
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', padding: 4 ,borderRadius: 2 ,mt: 6  }}
    >
       <Grid2 item
        sx={{ flexGrow: 1 }}
        size={{xs: 12, sm: 6, md: 4}}
        >
          <StarOutline sx={{ fontSize: 100, color: 'white' }} />
      
      </Grid2>
      <Grid2 item
        sx={{ flexGrow: 1 }}
        size={{xs: 12, sm: 6, md: 4}}
        >
          <Typography color='white' variant='h6'>Selecciona o crea una nota</Typography>
      </Grid2>
   </Grid2>      

  )
}
