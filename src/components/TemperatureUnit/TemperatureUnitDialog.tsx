import * as React from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  Grid,
  List,
  ListItem,
  Radio,
  Typography,
  useMediaQuery,
} from '@mui/material';
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';

import CustomDialogTitle from '@/components/Common/CustomDialogTitle';
import theme from '@/config/theme';
import { TemperatureUnitType } from '@/providers/TemperatureUnitProvider';
// import { TemperatureUnitApi, TemperatureUnitType } from '@/hooks/useTemperatureUnit';

type Props = {
  open: boolean;
  onClose?: () => void;
  onSuccess: (value: boolean) => void;
  temperatureUnit: TemperatureUnitType;
  handleTempUnitChange: (value: TemperatureUnitType) => void;
};

export default function TemperatureUnitDialog({
  open,
  onClose,
  onSuccess,
  temperatureUnit,
  handleTempUnitChange,
}: Props) {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [tempUnit, setTempUnit] = React.useState<TemperatureUnitType>(temperatureUnit);

  const confirmTempUnitChange = () => {
    handleTempUnitChange(tempUnit);

    if (onSuccess) {
      onSuccess(true);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm">
      <div tw="flex flex-col overflow-auto">
        <CustomDialogTitle
          id="change-temperature-unit-dialog"
          onClose={isMobile ? undefined : onClose}
          title="Temperature unit"
          startIcon={<DeviceThermostatOutlinedIcon tw="mr-2" />}
        />

        <DialogContent>
          <Grid container>
            <Grid item xs={12}>
              <Typography>Change temperature unit</Typography>
            </Grid>
            <Grid item xs={12}>
              <List>
                <ListItem disableGutters disablePadding onClick={() => setTempUnit('celcius')}>
                  <Radio
                    value="celcius"
                    size="small"
                    name="celcius"
                    checked={tempUnit === 'celcius'}
                    onChange={() => setTempUnit('celcius')}
                  />
                  <Typography tw="ml-2">Celcius</Typography>
                </ListItem>
                <ListItem disableGutters disablePadding onClick={() => setTempUnit('fahrenheit')}>
                  <Radio
                    value="fahrenheit"
                    size="small"
                    name="fahrenheit"
                    checked={tempUnit === 'fahrenheit'}
                    onChange={() => setTempUnit('fahrenheit')}
                  />
                  <Typography tw="ml-2">Fahrenheit</Typography>
                </ListItem>
              </List>
            </Grid>

            <Grid item container xs={12} justifyContent="flex-end">
              <Button onClick={confirmTempUnitChange}>OK</Button>
            </Grid>
          </Grid>
        </DialogContent>
      </div>
    </Dialog>
  );
}
