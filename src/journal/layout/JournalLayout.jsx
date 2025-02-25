

import { Box } from '@mui/material'
import React from 'react'
import { NavBar } from '../components'
import { SideBar } from '../components/SideBar'

const drawerWidth = 300

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{ display: 'flex' }}
         className='animate__animated animate__fadeIn'
    >

        <NavBar drawerWidth={drawerWidth}/>

        <SideBar drawerWidth={drawerWidth}/>

        <Box component='main'
        sx={{ flexGrow: 1, p: 3 }}
        
        >
            {/* <Toolbar /> */}

            {children}

        </Box>

    </Box>
  )
}
