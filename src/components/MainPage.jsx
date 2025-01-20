import { Divider, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

export const MainPage = ({zacatek, zvrat, konec}) => {
    return (
    <Grid container spacing={2}>
        <Grid size={10}>
          <Typography variant='h2'>Zacatek příběhu</Typography>
          <Typography variant='h4'>{zacatek}</Typography>
        </Grid>
        <Divider />
        <Grid size={10}>
          <Typography variant='h2'>Zvrat</Typography>
          <Typography variant='h4'>{zvrat}</Typography>
        </Grid>
        <Divider />
        <Grid size={10}>
          <Typography variant='h2'>Konec příběhu</Typography>
          <Typography variant='h4'>{konec}</Typography>
        </Grid>
      </Grid>
    );
};