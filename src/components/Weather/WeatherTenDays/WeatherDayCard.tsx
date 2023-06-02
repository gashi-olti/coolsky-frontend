import {
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
  styled,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { DateTime } from 'luxon';

import { ForecastDay } from '@/interfaces/weather.interface';
import { TemperatureUnitType } from '@/providers/TemperatureUnitProvider';
import HourlyCardList from '@/components/Common/HourlyCardList';
import WeatherIcon from '@/components/Weather/WeatherIcon';

import Details from './Details';

const StyledAccordion = styled(Accordion)(() => ({
  backgroundColor: 'transparent',
  borderRadius: 1,
  borderBottom: `1px solid ${grey[600]}`,
  boxShadow: 'none',

  '& .MuiAccordionSummary-content': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));

interface Props {
  forecastDay: ForecastDay;
  temperatureUnit: TemperatureUnitType;
}

export default function WeatherDayCard({ forecastDay, temperatureUnit }: Props) {
  const { date, day, hour, astro } = forecastDay;

  const {
    uv,
    condition,
    avghumidity,
    mintemp_c: mintempC,
    mintemp_f: mintempF,
    maxtemp_c: maxtempC,
    maxtemp_f: maxtempF,
    maxwind_kph: maxwindKph,
    maxwind_mph: maxwindMph,
    daily_chance_of_rain: chanceOfRain,
  } = day;

  const { text } = condition;

  const { sunrise, sunset } = astro;

  const formatDate = (value: string) => {
    const formatedDate = DateTime.fromFormat(value, 'yyyy-LL-dd');
    const currentDate = DateTime.now().toFormat('yyyy-LL-dd');

    return formatedDate.toFormat('yyyy-LL-dd') === currentDate
      ? 'Today'
      : formatedDate.weekdayLong + ', ' + formatedDate.monthLong + ' ' + formatedDate.day;
  };

  return (
    <Box>
      <StyledAccordion disableGutters square sx={{ userSelect: 'none' }}>
        <AccordionSummary sx={{ px: 0 }}>
          <Box>
            <Typography tw="text-slate-200">{formatDate(date)}</Typography>
            <Typography tw="text-slate-400">{text}</Typography>
          </Box>

          <Box tw="flex flex-row">
            <Box tw="flex flex-row items-center">
              {chanceOfRain > 0 && <Typography tw="text-slate-200">{chanceOfRain}%</Typography>}
              <Box sx={{ width: 40, ml: { xs: '4px', sm: 1 } }}>
                <WeatherIcon isDay={1} condition={text} />
              </Box>
            </Box>

            <Box
              sx={{
                ml: { xs: 1, sm: 2 },
                minWidth: 50,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
              }}
            >
              <Typography tw="text-slate-200">
                {temperatureUnit === 'celcius' ? maxtempC : maxtempF}&#176;
              </Typography>
              <Typography tw="text-slate-400">
                {temperatureUnit === 'celcius' ? mintempC : mintempF}&#176;
              </Typography>
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: 0, mt: 2 }}>
          <Grid container rowSpacing={2}>
            <Grid item xs={12} md={6}>
              <Details
                uv={uv}
                sunrise={sunrise}
                sunset={sunset}
                avghumidity={avghumidity}
                chanceOfRain={chanceOfRain}
                maxwind={temperatureUnit === 'celcius' ? maxwindKph : maxwindMph}
              />
            </Grid>
            <Grid item xs={12}>
              <HourlyCardList data={hour} temperatureUnit={temperatureUnit} />
            </Grid>
          </Grid>
        </AccordionDetails>
      </StyledAccordion>
    </Box>
  );
}
