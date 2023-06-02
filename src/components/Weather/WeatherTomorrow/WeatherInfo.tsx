import { Box, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';

import theme from '@/config/theme';
import { TemperatureUnitType } from '@/providers/TemperatureUnitProvider';
import { LocationModel, WeatherForecast } from '@/interfaces/weather.interface';
import { formatDate } from '@/utils/formatDate';

import WeatherIcon from '../WeatherIcon';

interface Props {
  temperatureUnit: TemperatureUnitType;
  location: LocationModel;
  forecast: WeatherForecast;
}

export default function WeatherInfo({ temperatureUnit, location, forecast }: Props) {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const { country, name } = location;

  const { forecastday } = forecast;
  const { day, date } = forecastday[1];

  const {
    mintemp_c: minTempC,
    maxtemp_c: maxTempC,
    mintemp_f: minTempF,
    maxtemp_f: maxTempF,
    condition,
  } = day;

  const { text } = condition;

  return (
    <Grid container rowSpacing={isMobile ? 8 : 8} mt={isMobile ? -8 : -6}>
      <Grid item xs={12} md={6}>
        <Stack direction="column" spacing={isMobile ? 0 : 1}>
          <Typography variant="h1" tw="text-base md:text-2xl">
            {name}
            {', '}
            {country}
          </Typography>
          <Typography variant="body1">{formatDate(date)}</Typography>
        </Stack>
      </Grid>
      <Grid item container xs={12} md={6} direction="row-reverse">
        <Grid item xs={6} md={12}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}
          >
            <Box sx={{ width: { xs: 100, sm: 150, md: 200 } }}>
              <WeatherIcon isDay={1} condition={text} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} md={12}>
          <Stack direction={isTablet ? 'column' : 'column-reverse'} spacing={1}>
            <Box
              sx={{
                width: 'auto',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: isTablet ? 'flex-start' : 'flex-end',
              }}
            >
              <div tw="flex flex-row items-center">
                <Typography>
                  Day {temperatureUnit === 'celcius' ? maxTempC : maxTempF}&#176;
                </Typography>
                <NorthIcon tw="text-base ml-1" sx={{ display: { xs: 'none', sm: 'block' } }} />
              </div>
              <Typography sx={{ mx: { xs: 0.5, md: 2 } }}>&#8226;</Typography>
              <div tw="flex flex-row items-center">
                <Typography>
                  Night {temperatureUnit === 'celcius' ? minTempC : minTempF}&#176;
                </Typography>
                <SouthIcon tw="text-base ml-1" sx={{ display: { xs: 'none', sm: 'block' } }} />
              </div>
            </Box>

            <Typography
              tw="text-xl font-bold md:(font-bold text-3xl)"
              sx={{ textAlign: isTablet ? 'start' : 'end' }}
            >
              {condition.text}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
}
