import { InboxOutlined } from '@mui/icons-material'
import { Grid2, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux';
import { setActivatedNote } from '../../store/journal';



export const SideBarItem = ({title='',body,date,imageUrls,id}) => {
  

    const dispatch = useDispatch();
    const onClickNote= ()=>{
        dispatch( setActivatedNote({title,body,date,imageUrls,id}) );
    }
    const newtitle = useMemo(() => {
        return title.length > 17
            ? title.substring(0, 17) + '...'
            : title
    }, [title])
  return (
    <ListItem >
                            <ListItemButton onClick={onClickNote}>
                                <ListItemIcon>
                                     <InboxOutlined /> 
                                </ListItemIcon>
                                <Grid2 container>

                                    <ListItemText primary={newtitle} />
                                    <ListItemText secondary={body} />

                                </Grid2>
                            </ListItemButton>
    </ListItem>
  )
}
