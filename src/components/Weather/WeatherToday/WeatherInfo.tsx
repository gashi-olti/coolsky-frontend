import { Box, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import { WiHumidity } from 'react-icons/wi';
import { WiStrongWind } from 'react-icons/wi';
import { WiWindDeg } from 'react-icons/wi';

import theme from '@/config/theme';
import { TemperatureUnitType } from '@/providers/TemperatureUnitProvider';
import {
  LocationModel,
  WeatherCurrentModel,
  WeatherForecast,
} from '@/interfaces/weather.interface';
import { formatDate } from '@/utils/formatDate';

import WeatherIcon from '../WeatherIcon';

const InfoBox = ({
  icon,
  title,
  value,
  endIcon,
  isMobile,
}: {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  endIcon?: any;
  isMobile: boolean;
}) => {
  return (
    <Box tw="flex flex-row items-start">
      <span tw="text-3xl mr-2 text-slate-300">{!isMobile && icon}</span>
      <Box tw="flex flex-col">
        <Typography tw="text-slate-300">{title}</Typography>
        <Typography tw="md:(text-lg)">
          {value} {endIcon && endIcon}
        </Typography>
      </Box>
    </Box>
  );
};

interface Props {
  temperatureUnit: TemperatureUnitType;
  current: WeatherCurrentModel;
  location: LocationModel;
  forecast: WeatherForecast;
}

export default function WeatherInfo({ temperatureUnit, current, location, forecast }: Props) {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const {
    humidity,
    temp_c: tempC,
    temp_f: tempF,
    feelslike_c: feelsLikeC,
    feelslike_f: feelsLikeF,
    wind_dir: windDir,
    wind_kph: windKph,
    wind_mph: windMph,
    is_day: isDay,
  } = current;
  const { condition } = current;

  const { text } = condition;

  const { country, name, localtime } = location;

  const { forecastday } = forecast;
  const { day } = forecastday[0];

  const {
    mintemp_c: minTempC,
    maxtemp_c: maxTempC,
    mintemp_f: minTempF,
    maxtemp_f: maxTempF,
  } = day;

  return (
    <Grid container rowSpacing={isMobile ? 8 : 8} mt={isMobile ? -8 : -6}>
      <Grid item xs={12} md={6}>
        <Stack direction="column" spacing={isMobile ? 0 : 1}>
          <Typography variant="h1" tw="text-base md:text-2xl">
            {name}
            {', '}
            {country}
          </Typography>
          <Typography variant="body1">{formatDate(localtime)}</Typography>
        </Stack>
      </Grid>

      <Grid item xs={6}>
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignContent="flex-end"
          spacing={isMobile ? 1 : 2}
          sx={{ marginTop: { md: -2 } }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: isTablet ? 'flex-start' : 'flex-end',
              alignItems: 'flex-start',
            }}
          >
            <Typography variant={isMobile ? 'body1' : 'h1'} tw="text-6xl md:text-9xl">
              {temperatureUnit === 'celcius' ? tempC : tempF}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                marginTop: isMobile ? 0 : 2,
              }}
            >
              <Typography variant={isMobile ? 'body1' : 'h1'} tw="text-3xl md:text-6xl">
                &#176;{temperatureUnit === 'celcius' ? 'C' : 'F'}
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}
          >
            <Typography variant="body1" sx={{ textAlign: isTablet ? 'left' : 'right' }}>
              Feels like {temperatureUnit === 'celcius' ? feelsLikeC : feelsLikeF}&#176;
            </Typography>
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
          </Box>
        </Stack>
      </Grid>

      <Grid item xs={6}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: isTablet ? 'flex-end' : 'flex-start',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box sx={{ width: { xs: 100, sm: 150, md: 200 } }}>
              <WeatherIcon isDay={isDay} condition={text} />
            </Box>
            <Typography tw="font-normal md:(font-bold text-3xl)">{text}</Typography>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} md={6} mt={isTablet ? 4 : 0}>
        <Box
          sx={{
            height: 1,
            display: 'flex',
            flexDirection: isTablet ? 'column' : 'row',
            justifyContent: 'flex-end',
            alignItems: isTablet ? 'flex-start' : 'flex-end',
          }}
        >
          <Stack
            direction={isTablet ? 'row' : 'column'}
            spacing={3}
            sx={{ maxWidth: { xs: 1, md: 160 } }}
          >
            <InfoBox
              icon={<WiHumidity />}
              title="Humidity"
              value={humidity}
              endIcon="%"
              isMobile={isMobile}
            />
            <InfoBox
              icon={<WiStrongWind />}
              title="Wind Speed"
              value={temperatureUnit === 'celcius' ? windKph : windMph}
              endIcon={temperatureUnit === 'celcius' ? 'kph' : 'mph'}
              isMobile={isMobile}
            />
            <InfoBox
              icon={<WiWindDeg />}
              title="Wind Direction"
              value={windDir}
              isMobile={isMobile}
            />
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
}
