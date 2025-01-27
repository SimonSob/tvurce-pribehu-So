import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

export const StoryPart = ({label, storyPart}) => {
    return (
        <Grid size={10}>
          <Typography variant='h2'>{label}</Typography>
          <Typography variant='h4'>{storyPart}</Typography>
        </Grid>
    );
}