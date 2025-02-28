import { use, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SaveOutlined } from "@mui/icons-material"
import { Grid2, Typography, Button, TextField } from "@mui/material"
import { ImageGallery } from "./ImageGallery"
import { useForm } from "../../hooks";
import { setActivatedNote, startSaveingNote } from "../../store/journal";





export const NoteView = () => {
 
  const {active:note} = useSelector(state => state.journalStore);
  const dispatch = useDispatch();
  
  const {title,body,date,imageUrls,onInputChange,formState}= useForm(note);

  const dateString =useMemo(() => (date) => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  },[date])

  useEffect(() => {
    dispatch(setActivatedNote(formState));
    
  },[formState]);

  const  onSaveForm = () => {
    dispatch(startSaveingNote(formState));
  }

  return (
    <Grid2 container direction={"row"} justifyContent={"space-between"} alignItems={"center"} sx={{ mb: 1 ,mt: 6}}>
        
      <Grid2 item>
        <Typography fontSize={39} fontWeight='light' >{dateString(date)}</Typography>
      </Grid2>

      <Grid2 item>
        <Button 
          color="primary" 
          onClick={onSaveForm}
          >
            <SaveOutlined sx={{fontSize:30,mr:1}}/>
           Guardar
        </Button>
      </Grid2>

      <Grid2 container size={{xs: 12}} >
        
            <TextField
            type="text"
            variant="filled"
            fullWidth
            placeholder="Ingrese un título"
            label="Título"
            sx={{border:'none',mb:1}}
            name="title"
            value={title}
            onChange={onInputChange}
            />
        
        
            <TextField
            type="text"
            variant="filled"
            fullWidth
            multiline
            minRows={5}
            placeholder="¿Qué sucedió en el día de hoy?"
            sx={{border:'none',mb:1}}
            name="body"
            value={body}
            onChange={onInputChange}
            />
      </Grid2>
      <ImageGallery/>
    </Grid2>
  )
}
