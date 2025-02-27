import { IconButton } from '@mui/material'
import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { ImageGallery, NoteView, NothingSelectedView } from '../views'
import {  AddOutlined } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { startNewNote } from '../../store/journal'

export const JournalPage = () => {

  const dispatch = useDispatch();
  const onclickNewNote = () => {
    dispatch(startNewNote());
  }
  return (
    <JournalLayout>
        <NothingSelectedView/> 
       <NoteView/>
       <ImageGallery/>


       <IconButton size='large'
                   onClick={onclickNewNote}     
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
