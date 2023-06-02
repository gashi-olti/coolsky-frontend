import * as React from 'react';
import { Box, Card, Tab, Tabs } from '@mui/material';

import { LocationApi } from '@/hooks/useLocation';

import Searchbar from './Searchbar';

interface Props {
  tabValue: string;
  setTabValue: React.Dispatch<React.SetStateAction<string>>;
  locationApi: LocationApi;
}

export default function WeatherHeader({ tabValue, setTabValue, locationApi }: Props) {
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ width: 1, paddingTop: 2 }}>
      <Card elevation={6} sx={{ backgroundColor: 'inherit' }}>
        <Box
          sx={{
            width: 1,
            borderBottom: 1,
            display: 'flex',
            flexDirection: { xs: 'column-reverse', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
          }}
          tw="border-slate-500"
        >
          <Tabs value={tabValue} onChange={handleChange} variant="scrollable">
            <Tab label="Today" value="today" />
            <Tab label="Tomorrow" value="tomorrow" />
            <Tab label="3 Days" value="ten-days" />
          </Tabs>

          <Searchbar locationApi={locationApi} />
        </Box>
      </Card>
    </Box>
  );
}
