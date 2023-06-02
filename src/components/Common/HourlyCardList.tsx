import 'swiper/css';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { Box, Card, Stack, Typography, styled } from '@mui/material';
import { DateTime } from 'luxon';

import { HourWeatherForecast } from '@/interfaces/weather.interface';
import { TemperatureUnitType } from '@/providers/TemperatureUnitProvider';
import WeatherIcon from '@/components/Weather/WeatherIcon';

SwiperCore.use([Navigation]);

const SwiperRoot = styled(Swiper)(() => ({
  '& .swiper-button-prev': {
    color: 'white',
  },
  '& .swiper-button-next': {
    color: 'white',
  },
}));

interface Props {
  data: HourWeatherForecast[];
  temperatureUnit: TemperatureUnitType;
}

export default function HourlyCardList({ data, temperatureUnit }: Props) {
  return (
    <SwiperRoot
      navigation
      spaceBetween={20}
      grabCursor={true}
      breakpoints={{
        0: { slidesPerView: 3 },
        600: { slidesPerView: 4 },
        900: { slidesPerView: 5 },
        1050: { slidesPerView: 6 },
        1200: { slidesPerView: 7 },
        1300: { slidesPerView: 8 },
      }}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <Card
            elevation={6}
            sx={{
              paddingY: 1,
              marginY: 2,
              backgroundColor: `rgba(0, 0, 0, 0.3)`,
              userSelect: 'none',
            }}
          >
            <Stack direction="column" alignItems="center" spacing={1} tw="text-slate-200">
              <Typography tw="text-2xl font-semibold md:(text-2xl font-black)">
                {temperatureUnit === 'celcius' ? item.temp_c : item.temp_f}
                &#176;
                {temperatureUnit === 'celcius' ? 'C' : 'F'}
              </Typography>

              <Box sx={{ width: 30 }}>
                <WeatherIcon isDay={item.is_day} condition={item.condition.text} />
              </Box>

              <Typography tw="text-base">
                {DateTime.fromFormat(item.time, 'yyyy-LL-dd HH:mm').toFormat('hh a')}
              </Typography>
            </Stack>
          </Card>
        </SwiperSlide>
      ))}
    </SwiperRoot>
  );
}
