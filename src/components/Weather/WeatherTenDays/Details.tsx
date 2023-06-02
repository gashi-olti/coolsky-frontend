import { Box, Grid, Stack, Typography } from '@mui/material';
import { WiUmbrella } from 'react-icons/wi';
import { WiHumidity } from 'react-icons/wi';
import { WiThermometer } from 'react-icons/wi';
import { WiStrongWind } from 'react-icons/wi';
import { WiBarometer } from 'react-icons/wi';

import { getUvIndexLevel } from '@/utils/functions';

type ItemProps = {
  icon: React.ReactNode;
  title: string;
  content: number | string;
  tempUnit?: boolean;
};

const Item = ({ icon, title, content, tempUnit }: ItemProps) => {
  return (
    <Grid item xs={12}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <span tw="text-2xl text-slate-400">{icon}</span>
          <Typography tw=" text-slate-400">{title}</Typography>
        </Stack>

        <Typography tw="text-slate-200">
          {content}
          {tempUnit && <span>&#176;</span>}
          {tempUnit}
        </Typography>
      </Box>
    </Grid>
  );
};

interface DetailsProps {
  uv: number;
  avghumidity: number;
  maxwind: number;
  chanceOfRain: number;
  sunrise: string;
  sunset: string;
}

export default function Details({
  avghumidity,
  chanceOfRain,
  maxwind,
  uv,
  sunrise,
  sunset,
}: DetailsProps) {
  return (
    <Grid container rowSpacing={0.5}>
      <Item icon={<WiHumidity />} title="Average humidity" content={`${avghumidity}%`} />
      <Item icon={<WiStrongWind />} title="Maximum wind" content={maxwind} />
      <Item icon={<WiUmbrella />} title={'Chance of rain'} content={`${chanceOfRain}%`} />
      <Item icon={<WiBarometer />} title="UV index" content={`${getUvIndexLevel(uv)}, ${uv}`} />
      <Item icon={<WiThermometer />} title="Sunrise/sunset" content={`${sunrise}, ${sunset}`} />
    </Grid>
  );
}
