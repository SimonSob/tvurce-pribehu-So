import { Divider } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { StoryPart } from './StoryPart.jsx';

export const MainPage = ({zacatek, zvrat, konec}) => {
    return (
    <Grid container spacing={2}>
        <StoryPart label="Zacatek pribehu" storyPart={zacatek} />
        <Divider />
        <StoryPart label="Zvrat" storyPart={zvrat} />
        <Divider />
        <StoryPart label="Konec pribehu" storyPart={konec} />
      </Grid>
    );
};