import { Grid, Typography } from '@mui/material';

import { HourWeatherForecast } from '@/interfaces/weather.interface';
import { TemperatureUnitType } from '@/providers/TemperatureUnitProvider';
import HourlyCardList from '@/components/Common/HourlyCardList';

interface Props {
  hour: HourWeatherForecast[];
  temperatureUnit: TemperatureUnitType;
}

export default function WeatherHourly({ hour, temperatureUnit }: Props) {
  return (
    <Grid container mt={10}>
      <Grid item xs={12}>
        <Typography tw="font-bold">Hourly Forecast</Typography>
      </Grid>
      <Grid item xs={12} mt={1}>
        <HourlyCardList data={hour} temperatureUnit={temperatureUnit} />
      </Grid>
    </Grid>
  );
}
