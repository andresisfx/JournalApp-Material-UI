import { IconButton } from '@mui/material'
import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { ImageGallery, NoteView, NothingSelectedView } from '../views'
import {  AddOutlined } from '@mui/icons-material'

export const JournalPage = () => {
  return (
    <JournalLayout>
       {/* <NothingSelectedView/> */}
       <NoteView/>
       <ImageGallery/>


       <IconButton size='large'
                   sx={
                    {
                      color:'white',
                       backgroundColor:'error.main',
                       position:'fixed',
                       right:50,
                       bottom:50,
                        ':hover':{backgroundColor:'error.main',
                         opacity:0.9
                        }
                     }
                    }>
          <AddOutlined sx={{fontSize:30}}/>
       </IconButton>
    </JournalLayout>
  )
}
