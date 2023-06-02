import * as React from 'react';
import { Box, Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import { WiSunrise } from 'react-icons/wi';
import { WiSunset } from 'react-icons/wi';
import { WiMoonrise } from 'react-icons/wi';
import { WiMoonset } from 'react-icons/wi';
import { WiMoonWaxingCrescent3 } from 'react-icons/wi';
import { DateTime } from 'luxon';

import theme from '@/config/theme';

import SemitransparentBackground from './SemitransparentBackground';

type ItemProps = {
  icon: React.ReactNode;
  title: string;
  content: number | string;
};

const Item = ({ icon, title, content }: ItemProps) => {
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

        <Typography>{content}</Typography>
      </Box>
    </Grid>
  );
};

interface Props {
  sunrise: string;
  sunset: string;
  moonrise?: string;
  moonset?: string;
  moonPhase?: string;
  displayRemainingDayLength?: boolean;
}

export default function CommonAstronomyCard({
  moonPhase,
  moonrise,
  moonset,
  sunrise,
  sunset,
  displayRemainingDayLength = false,
}: Props) {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [dayLength, setDayLength] = React.useState<string | undefined>();
  const [remainingDayLength, setRemainingDayLength] = React.useState<string | undefined>();

  React.useEffect(() => {
    const sunriseTime = DateTime.fromFormat(sunrise, 'hh:mm a');
    const sunsetTime = DateTime.fromFormat(sunset, 'hh:mm a');

    const diff = sunsetTime.diff(sunriseTime, ['hours', 'minutes']).toObject();
    const result = diff.hours + 'h ' + diff.minutes + 'm';

    setDayLength(result);
  }, [sunrise, sunset]);

  React.useEffect(() => {
    const sunriseTime = DateTime.fromFormat(sunrise, 'hh:mm a');
    const sunsetTime = DateTime.fromFormat(sunset, 'hh:mm a');
    const now = DateTime.fromFormat(DateTime.now().toFormat('hh:mm a'), 'hh:mm a');

    let remainingDaylight = null;
    let result = '';

    if (now > sunriseTime && now < sunsetTime) {
      remainingDaylight = sunsetTime.diff(now, ['hours', 'minutes']).toObject();
      result = remainingDaylight.hours + 'h ' + remainingDaylight.minutes + 'm';
    }

    setRemainingDayLength(result);
  }, [sunrise, sunset]);

  return (
    <SemitransparentBackground tw="rounded">
      <Grid container rowSpacing={1} py={isMobile ? 1 : 2} px={isMobile ? 0 : 1}>
        {sunrise && <Item icon={<WiSunrise />} title="Sunrise" content={sunrise} />}
        {sunset && <Item icon={<WiSunset />} title="Sunset" content={sunset} />}
        {moonrise && <Item icon={<WiMoonrise />} title="Moonrise" content={moonrise} />}
        {moonset && <Item icon={<WiMoonset />} title="Moonset" content={moonset} />}
        {moonPhase && (
          <Item icon={<WiMoonWaxingCrescent3 />} title="Moon phase" content={moonPhase} />
        )}

        {(dayLength || (displayRemainingDayLength && remainingDayLength)) && (
          <Grid item xs={12} mt={2}>
            <Divider tw="bg-slate-300" />
          </Grid>
        )}

        {dayLength && (
          <Grid item container xs={12}>
            <Item
              icon={<AccessTimeIcon tw="text-xl text-slate-300 -mt-1" />}
              title="Length of the day"
              content={dayLength ?? ''}
            />
          </Grid>
        )}
        {displayRemainingDayLength && remainingDayLength && (
          <Grid item container xs={12}>
            <Item
              icon={<HourglassTopIcon tw="text-xl text-slate-300 -mt-1" />}
              title="Remaining daylight"
              content={remainingDayLength ?? ''}
            />
          </Grid>
        )}
      </Grid>
    </SemitransparentBackground>
  );
}
