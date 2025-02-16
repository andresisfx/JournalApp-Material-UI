

import { InboxOutlined, MailOutlined } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid2, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const SideBar = ({drawerWidth=240}) => {
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
                    ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio'].map((text, index) => (
                        <ListItem key={text}>
                            <ListItemButton>
                                <ListItemIcon>
                                     <InboxOutlined /> 
                                </ListItemIcon>
                                <Grid2 container>

                                    <ListItemText primary={text} />
                                    <ListItemText secondary={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quos.'} />

                                </Grid2>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
             </List>


        </Drawer>
        
       



    </Box>
  )
}
