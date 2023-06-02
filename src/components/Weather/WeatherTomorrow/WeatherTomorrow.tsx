import * as React from 'react';
import { Grid } from '@mui/material';

import WeatherModel from '@/interfaces/weather.interface';
import { TemperatureUnitType } from '@/providers/TemperatureUnitProvider';

import WeatherInfo from './WeatherInfo';
import WeatherHourly from './WeatherHourly';
import Details from './Details';
import Astronomy from './Astronomy';

interface Props {
  temperatureUnit: TemperatureUnitType;
  data: WeatherModel;
}

export default function WeatherTomorrow({ temperatureUnit, data }: Props) {
  const { location, forecast } = data;

  const { forecastday } = forecast;
  const { day, astro, hour } = forecastday[1];

  return (
    <Grid container alignItems="flex-start" rowSpacing={8} mb={8}>
      <Grid item xs={12}>
        <WeatherInfo temperatureUnit={temperatureUnit} location={location} forecast={forecast} />
      </Grid>
      <Grid item xs={12}>
        <WeatherHourly hour={hour} temperatureUnit={temperatureUnit} />
      </Grid>
      <Grid item xs={12}>
        <Details day={day} temperatureUnit={temperatureUnit} />
      </Grid>
      <Grid item xs={12}>
        <Astronomy astro={astro} />
      </Grid>
    </Grid>
  );
}
