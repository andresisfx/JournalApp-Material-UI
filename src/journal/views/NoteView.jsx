import { SaveOutlined } from "@mui/icons-material"
import { Grid2, Typography, Button, TextField } from "@mui/material"





export const NoteView = () => {
  return (
    <Grid2 container direction={"row"} justifyContent={"space-between"} alignItems={"center"} sx={{ mb: 1 ,mt: 6}}>
        
      <Grid2 item>
        <Typography fontSize={39} fontWeight='light' >10 de agosto, 2024</Typography>
      </Grid2>

      <Grid2 item>
        <Button color="primary" >
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
            />
        
        
            <TextField
            type="text"
            variant="filled"
            fullWidth
            multiline
            minRows={5}
            placeholder="¿Qué sucedió en el día de hoy?"
            sx={{border:'none',mb:1}}
            />
      </Grid2>
    </Grid2>
  )
}
