import * as React from 'react';
import { Box, Container } from '@mui/material';
import useSWR from 'swr';

import useLocation from '@/hooks/useLocation';
import WeatherModel from '@/interfaces/weather.interface';
import Background from '@/components/Background';
import { Videos } from '@/components/Videos';
import useGetLocation from '@/hooks/useGeoLocation';
import { useTemperatureUnit } from '@/providers/TemperatureUnitProvider';
import TabPanel from '@/components/Common/TabPanel';
import LoadingSpinner from '@/components/LoadingSpinner';

import WeatherHeader from './WeatherHeader';
import WeatherToday from './WeatherToday';
import WeatherTomorrow from './WeatherTomorrow/WeatherTomorrow';
import WeatherTenDays from './WeatherTenDays/WeatherTenDays';

export default function Weather() {
  const [tabValue, setTabValue] = React.useState<string>('today');

  const { temperatureUnit } = useTemperatureUnit();
  const { geoLocation } = useGetLocation();
  const locationApi = useLocation();

  const { data, error } = useSWR<WeatherModel>(
    locationApi.city
      ? tabValue === 'ten-days'
        ? `/api/&q=${locationApi?.city}&days=10&aqi=yes`
        : tabValue === 'tomorrow'
        ? `/api/&q=${locationApi?.city}&days=2&aqi=yes`
        : `/api/&q=${locationApi?.city}&days=1&aqi=yes`
      : geoLocation?.latitude && geoLocation?.longitude
      ? `/api/&q=${geoLocation?.latitude},${geoLocation?.longitude}&days=10&aqi=yes`
      : null
  );

  const getImage = ({ isDay, condition }: { isDay?: number; condition?: string }) => {
    let src: string = '';

    if (isDay === 1 && (condition === 'Clear' || condition === 'Sunny')) {
      src = Videos.DayClear;
    } else if (isDay === 1 && (condition === 'Cloudy' || condition === 'Partly cloudy')) {
      src = Videos.DayCloudy;
    } else if (
      isDay === 1 &&
      (condition === 'rain' || condition === 'Patchy light rain with thunder')
    ) {
      src = Videos.DayRaining;
    } else if (
      isDay === 1 &&
      (condition === 'storm' || condition === 'Moderate or heavy rain with thunder')
    ) {
      src = Videos.DayThunderStorm;
    } else if (isDay === 1 && condition === 'snow') {
      src = Videos.DaySnowing;
    } else if (isDay === 0 && condition === 'Clear') {
      src = Videos.NightClear;
    } else if (isDay === 0 && (condition === 'cloudy' || condition === 'Partly cloudy')) {
      src = Videos.NightCloudy;
    } else if (isDay === 0 && condition === 'rain') {
      src = Videos.NightRaining;
    } else if (
      isDay === 0 &&
      (condition === 'storm' ||
        condition === 'Moderate or heavy rain with thunder' ||
        condition === 'Patchy light rain with thunder')
    ) {
      src = Videos.NightThunderStorm;
    } else if (isDay === 0 && condition === 'snow') {
      src = Videos.NightSnowing;
    }

    return src;
  };

  if (!data && !error) {
    return <LoadingSpinner />;
  }

  return (
    <Background
      src={getImage({ isDay: data?.current.is_day, condition: data?.current.condition.text })}
    >
      <Container maxWidth="lg">
        <WeatherHeader tabValue={tabValue} setTabValue={setTabValue} locationApi={locationApi} />

        <Box sx={{ width: 1, marginTop: 3 }}>
          <TabPanel value={tabValue} tab="today">
            {data && <WeatherToday temperatureUnit={temperatureUnit} data={data} />}
          </TabPanel>

          <TabPanel value={tabValue} tab="tomorrow">
            {data && <WeatherTomorrow temperatureUnit={temperatureUnit} data={data} />}
          </TabPanel>

          <TabPanel value={tabValue} tab="ten-days">
            {data && <WeatherTenDays temperatureUnit={temperatureUnit} data={data} />}
          </TabPanel>
        </Box>
      </Container>
    </Background>
  );
}
