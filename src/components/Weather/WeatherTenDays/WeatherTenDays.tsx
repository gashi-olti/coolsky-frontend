import { Box, Grid, Typography } from '@mui/material';

import WeatherModel from '@/interfaces/weather.interface';
import { TemperatureUnitType } from '@/providers/TemperatureUnitProvider';

import WeatherDayCard from './WeatherDayCard';

interface Props {
  temperatureUnit: TemperatureUnitType;
  data: WeatherModel;
}

export default function WeatherTenDays({ data, temperatureUnit }: Props) {
  const { location, forecast } = data;

  const { forecastday } = forecast;

  return (
    <Grid container rowSpacing={2} mt={2} mb={10}>
      <Grid item xs={12}>
        <Typography
          variant="h1"
          tw="text-base md:text-2xl"
        >{`${location.name}, ${location.country}`}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            paddingX: 2,
            borderRadius: 1,
          }}
        >
          {forecastday &&
            forecastday.map((day, index) => (
              <WeatherDayCard key={index} forecastDay={day} temperatureUnit={temperatureUnit} />
            ))}
        </Box>
      </Grid>
    </Grid>
  );
}
