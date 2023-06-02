import * as React from 'react';
import { Grid, Typography } from '@mui/material';

import { Astro } from '@/interfaces/weather.interface';
import CommonAstronomyCard from '@/components/Common/CommonAstronomyCard';

interface Props {
  astro: Astro;
}

export default function Astronomy({ astro }: Props) {
  const { sunrise, sunset, moonrise, moonset, moon_phase: moonPhase } = astro;

  return (
    <Grid container rowSpacing={3}>
      <Grid item xs={12}>
        <Typography tw="font-bold">Astronomy</Typography>
      </Grid>
      <Grid item xs={12}>
        <CommonAstronomyCard
          sunrise={sunrise}
          sunset={sunset}
          moonrise={moonrise}
          moonset={moonset}
          moonPhase={moonPhase}
          displayRemainingDayLength
        />
      </Grid>
    </Grid>
  );
}
