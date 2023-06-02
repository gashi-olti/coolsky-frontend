import * as React from 'react';
import { Grid } from '@mui/material';

import { TemperatureUnitType } from '@/providers/TemperatureUnitProvider';
import WeatherModel from '@/interfaces/weather.interface';

import WeatherHourly from './WeatherHourly';
import CurrentDetails from './CurrentDetails';
import Astronomy from './Astronomy';
import WeatherInfo from './WeatherInfo';

interface Props {
  temperatureUnit: TemperatureUnitType;
  data: WeatherModel;
}

export default function WeatherToday({ temperatureUnit, data }: Props) {
  const { current, location, forecast } = data;

  const { forecastday } = forecast;
  const { day, astro, hour } = forecastday[0];

  return (
    <Grid container alignItems="flex-start" rowSpacing={8} mb={8}>
      <Grid item xs={12}>
        <WeatherInfo
          temperatureUnit={temperatureUnit}
          current={current}
          location={location}
          forecast={forecast}
        />
      </Grid>

      <Grid item xs={12}>
        <WeatherHourly hour={hour} temperatureUnit={temperatureUnit} />
      </Grid>

      <Grid item xs={12}>
        <CurrentDetails day={day} temperatureUnit={temperatureUnit} />
      </Grid>

      <Grid item xs={12}>
        <Astronomy astro={astro} />
      </Grid>
    </Grid>
  );
}
