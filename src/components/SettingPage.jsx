import { Divider } from '@mui/material';
import { StoryPartEdit } from './StoryPartEdit.jsx';
import Grid from '@mui/material/Grid2';

export const SettingPage = ({ zacatek, setZacatek, zvrat, setZvrat, konec, setKonec }) => {
    return (
        <Grid container spacing={2}>
            <StoryPartEdit label="Zacatek pribehu" storyPart={zacatek} setStoryPart={setZacatek} />
            <Divider />
            <StoryPartEdit label="Zapletka" storyPart={zvrat} setStoryPart={setZvrat} />
            <Divider />
            <StoryPartEdit label="Konec pribehu" storyPart={konec} setStoryPart={setKonec} />
        </Grid>
    )
}