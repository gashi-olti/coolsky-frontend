import * as React from 'react';
import { useTranslation } from 'next-i18next';
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import MenuIcon from '@mui/icons-material/Menu';
import DeviceThermostatRoundedIcon from '@mui/icons-material/DeviceThermostatRounded';
import CloseIcon from '@mui/icons-material/Close';

import { Images } from '@/components/Images';
import TemperatureUnitDialog from '@/components/TemperatureUnit/TemperatureUnitDialog';
import { useTemperatureUnit } from '@/providers/TemperatureUnitProvider';
import { useNotification } from '@/providers/NotificationProvider';

const drawerWidth = 300;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function Header() {
  const { t } = useTranslation('common');

  const [open, setOpen] = React.useState(false);
  const [openTempUnit, setOpenTempUnit] = React.useState(false);

  const { temperatureUnit, handleTempUnitChange } = useTemperatureUnit();
  const { openSnackbar } = useNotification();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleChange = () => {
    setOpen(false);
    setOpenTempUnit(true);
  };

  const handleCloseDialog = () => {
    setOpenTempUnit(false);
  };

  const handleDialogSuccess = (value: boolean) => {
    if (value) {
      setOpenTempUnit(false);
      openSnackbar('Temperature unit has been changed');
    }
  };

  return (
    <div tw="w-full">
      <CssBaseline />
      <AppBar position="relative" open={open} tw="bg-gradient-to-r from-slate-900 to-sky-800">
        <Toolbar tw="flex flex-row justify-between">
          <img width={70} src={Images.Logo} alt="logo" />
          <Tooltip title={t('common:menu')} arrow>
            <IconButton aria-label="open drawer" edge="end" onClick={handleDrawerOpen}>
              <MenuIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <div tw="w-full px-2 flex flex-row justify-between items-center">
            <Typography variant="h4">Menu</Typography>
            <IconButton size="small" onClick={handleDrawerClose}>
              <CloseIcon />
            </IconButton>
          </div>
        </DrawerHeader>

        <Divider />

        <List>
          <ListItem onClick={handleChange}>
            <ListItemIcon>
              <DeviceThermostatRoundedIcon />
            </ListItemIcon>
            <ListItemText>
              <Typography>Temperature units</Typography>
            </ListItemText>
            <Typography tw="capitalize">{temperatureUnit as string}</Typography>
          </ListItem>
        </List>
      </Drawer>

      <TemperatureUnitDialog
        open={openTempUnit}
        onClose={handleCloseDialog}
        onSuccess={(value) => handleDialogSuccess(value)}
        temperatureUnit={temperatureUnit}
        handleTempUnitChange={handleTempUnitChange}
      />
    </div>
  );
}
