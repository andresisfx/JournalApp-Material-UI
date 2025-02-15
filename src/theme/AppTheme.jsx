import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import React from 'react'
import { Purple } from './'

export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={Purple}>

       <CssBaseline />
       {children}
       
    </ThemeProvider>
  )
}
