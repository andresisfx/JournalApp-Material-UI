
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid2, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { startLogout } from '../../store/auth';


export const NavBar = ({drawerWidth}) => {

  const dispatch = useDispatch();
  const {displayName} = useSelector(state => state.authStore);

  const onLogOut = () => {
    dispatch(startLogout());
  }
  return (
    <AppBar position='fixed'
    sx={{ 
      width: {sm:`calc(100% - ${drawerWidth}px)`},
      ml: {sm:`${drawerWidth}px`},
    }}
    >
     <Toolbar>
        <IconButton
        color='inherit'
        edge='start'
        sx={{mr:2, display:{sm:'none'}}}
        >
            <MenuOutlined/>
        </IconButton>
        <Grid2 container direction='row'sx={{ flexGrow: 1 }} justifyContent='space-between' alignItems={'center'}>
            <Typography variant='h6' noWrap component='div'>{displayName}</Typography>
            <IconButton color='error' onClick={onLogOut}>
                <LogoutOutlined/>
            </IconButton>
        </Grid2>
     </Toolbar>
    </AppBar>
  )
}
