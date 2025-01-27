import { Typography, TextField } from '@mui/material';
import Grid from '@mui/material/Grid2';

export const StoryPartEdit = ({ label, storyPart }) => {
    return (
        <Grid size={10}>
          <TextField 
           id="storyPart"
           label={label} 
           variant="outlined" 
           multiline 
           minRows={4} 
           fullWidth 
           value={storyPart} />
        </Grid>
    )
}