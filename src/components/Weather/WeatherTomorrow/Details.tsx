import * as React from 'react';
import { Grid, Typography } from '@mui/material';

import { DayWeatherForecast } from '@/interfaces/weather.interface';
import { TemperatureUnitType } from '@/providers/TemperatureUnitProvider';
import CommonDetailsCard from '@/components/Common/CommonDetailsCard';

interface Props {
  day: DayWeatherForecast;
  temperatureUnit: TemperatureUnitType;
}

export default function Details({ day, temperatureUnit }: Props) {
  const {
    daily_chance_of_rain: chanceOfRain,
    avghumidity,
    avgtemp_c: avgTempC,
    avgtemp_f: avgTempF,
    avgvis_km: avgVisKm,
    avgvis_miles: avgVisMiles,
    maxwind_kph: maxWindKph,
    maxwind_mph: maxWindMph,
    totalprecip_in: totalPrecipIn,
    totalprecip_mm: totalPrecipMm,
    uv,
  } = day;

  return (
    <Grid container rowSpacing={3}>
      <Grid item xs={12}>
        <Typography tw="font-bold">Details</Typography>
      </Grid>
      <Grid item xs={12}>
        <CommonDetailsCard
          temperatureUnit={temperatureUnit}
          avgTempC={avgTempC}
          avgTempF={avgTempF}
          avgVisKm={avgVisKm}
          avgVisMiles={avgVisMiles}
          avghumidity={avghumidity}
          chanceOfRain={chanceOfRain}
          maxWindKph={maxWindKph}
          maxWindMph={maxWindMph}
          totalPrecipIn={totalPrecipIn}
          totalPrecipMm={totalPrecipMm}
          uv={uv}
        />
      </Grid>
    </Grid>
  );
}
