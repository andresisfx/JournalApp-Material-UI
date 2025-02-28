

import { InboxOutlined, MailOutlined } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid2, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React, { use } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { SideBarItem } from './SideBarItem';

export const SideBar = ({drawerWidth=240}) => {

    const notes= useSelector(state => state.journalStore.notes);
    
  return (
    <Box
       component="nav"
       sx={{ width: { sm: drawerWidth}, flexShrink: { sm: 0 } }} // flexShrink: { sm: 0 }determina cuanto puede encogerse,en este caso es para que el sidebar se pueda minimizar
    >
        <Drawer
        variant='permanent'//siempre permanente
        open
        sx={{
            display: { xs: 'block' },//para que la barra lateral se vea en pantallas pequeñas
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }//.MidDrawer-paper se utiliza para personalizar el estilo de la barra lateral
        }}
        >
             <Toolbar>
                <Typography variant='h6' noWrap component='div'>
                    Mi SideBar
                </Typography>
             </Toolbar>
             <Divider/>
             <List>
                {
                    notes?.map((note) => (
                       <SideBarItem key={note.id} {...note}/>
                    ))
                }
             </List>


        </Drawer>
        
       



    </Box>
  )
}
