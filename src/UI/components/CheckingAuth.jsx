
import { CircularProgress, Grid2 } from '@mui/material'
import React from 'react'

export const CheckingAuth = () => {
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
         
        size={{xs: 12, sm: 6, md: 4}}
         sx={{ display: 'flex', alignItems: 'center',justifyContent: 'center', padding: 3, borderRadius: 2 }} >

         <CircularProgress color='warning' size={100} thickness={2} />
       </Grid2>
    </Grid2>
  )
}
