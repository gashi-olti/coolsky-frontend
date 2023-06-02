import * as React from 'react';
import { Box, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { WiUmbrella } from 'react-icons/wi';
import { WiHumidity } from 'react-icons/wi';
import { WiThermometer } from 'react-icons/wi';
import { WiStrongWind } from 'react-icons/wi';
import { WiRaindrops } from 'react-icons/wi';
import { WiBarometer } from 'react-icons/wi';

import { TemperatureUnitType } from '@/providers/TemperatureUnitProvider';
import theme from '@/config/theme';
import { getUvIndexLevel } from '@/utils/functions';

import SemitransparentBackground from './SemitransparentBackground';

type ItemProps = {
  icon: React.ReactNode;
  title: string;
  content: number | string;
  tempUnit?: string;
};

const Item = ({ icon, title, content, tempUnit }: ItemProps) => {
  return (
    <Grid item xs={12} md={6}>
      <Box
        px={2}
        py={1}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <span tw="text-2xl text-slate-300">{icon}</span>
          <Typography tw="text-slate-300">{title}</Typography>
        </Stack>

        <Typography>
          {content}
          {tempUnit && <span tw="text-slate-300">&#176;</span>}
          {tempUnit}
        </Typography>
      </Box>
    </Grid>
  );
};

interface Props {
  temperatureUnit: TemperatureUnitType;
  chanceOfRain?: number;
  avghumidity?: number;
  avgTempC?: number;
  avgTempF?: number;
  avgVisKm?: number;
  avgVisMiles?: number;
  maxWindKph?: number;
  maxWindMph?: number;
  totalPrecipMm?: number;
  totalPrecipIn?: number;
  uv?: number;
  isToday?: boolean;
}

export default function CommonDetailsCard({
  temperatureUnit,
  avgTempC,
  avgTempF,
  avgVisKm,
  avgVisMiles,
  avghumidity,
  chanceOfRain,
  maxWindKph,
  maxWindMph,
  totalPrecipIn,
  totalPrecipMm,
  uv,
  isToday = false,
}: Props) {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <SemitransparentBackground tw="rounded">
      <Grid container rowSpacing={1} py={isMobile ? 1 : 2} px={isMobile ? 0 : 1}>
        {chanceOfRain !== undefined && chanceOfRain !== null && (
          <Item
            icon={<WiUmbrella />}
            title={isToday ? 'Chance of precipitation today' : 'Chance of precipitation tomorrow'}
            content={`${chanceOfRain}%`}
          />
        )}
        {avghumidity !== undefined && avghumidity !== null && (
          <Item icon={<WiHumidity />} title="Average humidity" content={`${avghumidity}%`} />
        )}
        {avgTempC !== undefined &&
          avgTempC !== null &&
          avgTempF !== undefined &&
          avgTempF !== null && (
            <Item
              icon={<WiThermometer />}
              title="Average temperature"
              content={temperatureUnit === 'celcius' ? avgTempC : avgTempF}
              tempUnit={temperatureUnit === 'celcius' ? 'C' : 'F'}
            />
          )}
        {avgVisKm !== undefined &&
          avgVisKm !== null &&
          avgVisMiles !== undefined &&
          avgVisMiles !== null && (
            <Item
              icon={<VisibilityIcon tw="text-base text-slate-300 -mt-1" />}
              title="Visibility"
              content={temperatureUnit === 'celcius' ? `${avgVisKm} KM` : `${avgVisMiles} MI`}
            />
          )}
        {maxWindKph !== undefined &&
          maxWindKph !== null &&
          maxWindMph !== undefined &&
          maxWindMph !== null && (
            <Item
              icon={<WiStrongWind />}
              title="Maximum wind"
              content={temperatureUnit === 'celcius' ? `${maxWindKph} KPH` : `${maxWindMph} MPH`}
            />
          )}
        {totalPrecipIn !== undefined &&
          totalPrecipIn !== null &&
          totalPrecipMm !== undefined &&
          totalPrecipMm !== null && (
            <Item
              icon={<WiRaindrops />}
              title="Total daily volume"
              content={
                temperatureUnit === 'celcius' ? `${totalPrecipMm} mm` : `${totalPrecipIn} in`
              }
            />
          )}
        {uv !== undefined && uv !== null && (
          <Item icon={<WiBarometer />} title="UV index" content={`${getUvIndexLevel(uv)}, ${uv}`} />
        )}
      </Grid>
    </SemitransparentBackground>
  );
}
