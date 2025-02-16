import { Typography } from '@mui/material'
import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { ImageGallery, NoteView, NothingSelectedView } from '../views'

export const JournalPage = () => {
  return (
    <JournalLayout>
       {/* <NothingSelectedView/> */}
       <NoteView/>
       <ImageGallery/>
    </JournalLayout>
  )
}
