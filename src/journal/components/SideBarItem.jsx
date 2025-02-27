import { InboxOutlined } from '@mui/icons-material'
import { Grid2, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useMemo } from 'react'



export const SideBarItem = ({note}) => {
    const newtitle = useMemo(() => {
        return note.title.length > 17
            ? note.title.substring(0, 17) + '...'
            : note.title
    }, [note.title])
  return (
    <ListItem >
                            <ListItemButton>
                                <ListItemIcon>
                                     <InboxOutlined /> 
                                </ListItemIcon>
                                <Grid2 container>

                                    <ListItemText primary={newtitle} />
                                    <ListItemText secondary={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quos.'} />

                                </Grid2>
                            </ListItemButton>
    </ListItem>
  )
}
