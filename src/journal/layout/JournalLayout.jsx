

import { Box } from '@mui/material'
import React from 'react'

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{ display: 'flex' }}>

         {/*NavBar*/}

         {/* SideBar*/}

        <Box component='main'
        sx={{ flexGrow: 1, p: 3 }}
        
        >
            {/* <Toolbar /> */}
            
            {children}

        </Box>

    </Box>
  )
}
