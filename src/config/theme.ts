import { createTheme, Components, Theme } from '@mui/material';
import { createElement } from 'react';
import { theme as twinTheme } from 'twin.macro';

export const defaultGradient = (
  toRight = true,
  from = twinTheme`colors.slate[900]`,
  to = twinTheme`colors.sky[800]`
) => {
  const direction = toRight ? `to right` : `to left`;
  return `linear-gradient(${direction},${from} 50%, ${to} 100%)`;
};

const appTheme = createTheme({
  typography: {
    fontSize: 16,
    fontFamily: twinTheme`fontFamily.sans`,
    fontWeightRegular: twinTheme`fontWeight.normal`,
    fontWeightMedium: twinTheme`fontWeight.medium`,
    fontWeightBold: twinTheme`fontWeight.bold`,
    h1: {
      fontSize: twinTheme`fontSize.4xl`,
      lineHeight: twinTheme`lineHeight.10`,
      fontWeight: twinTheme`fontWeight.bold`,
      color: twinTheme`colors.slate[200]`,
    },
    h2: {
      textTransform: 'uppercase',
      fontSize: twinTheme`fontSize.2xl`,
      lineHeight: twinTheme`lineHeight.8`,
      fontWeight: twinTheme`fontWeight.bold`,
      color: twinTheme`colors.slate[200]`,
    },
    h3: {
      fontSize: twinTheme`fontSize.xl`,
      lineHeight: twinTheme`lineHeight.7`,
      fontWeight: twinTheme`fontWeight.bold`,
      color: twinTheme`colors.slate[200]`,
    },
    h4: {
      fontSize: twinTheme`fontSize.base`,
      lineHeight: twinTheme`lineHeight.7`,
      fontWeight: twinTheme`fontWeight.bold`,
      color: twinTheme`colors.slate[200]`,
    },
    h5: {
      fontSize: twinTheme`fontSize.sm`,
      lineHeight: twinTheme`lineHeight.6`,
      fontWeight: twinTheme`fontWeight.bold`,
      color: twinTheme`colors.slate[200]`,
    },
    h6: {
      fontSize: twinTheme`fontSize.xs`,
      lineHeight: twinTheme`lineHeight.6`,
      fontWeight: twinTheme`fontWeight.bold`,
      color: twinTheme`colors.slate[200]`,
    },
    subtitle1: {
      fontSize: twinTheme`fontSize.xl`,
      lineHeight: twinTheme`lineHeight.6`,
      fontWeight: twinTheme`fontWeight.light`,
      color: twinTheme`colors.slate[200]`,
    },
    subtitle2: {
      fontSize: twinTheme`fontSize.base`,
      color: twinTheme`colors.slate[200]`,
    },
    body1: {
      fontSize: twinTheme`fontSize.base`,
      color: twinTheme`colors.slate[200]`,
    },
    body2: {
      fontSize: twinTheme`fontSize.xs`,
      color: twinTheme`colors.slate[200]`,
    },
    caption: {
      fontSize: twinTheme`fontSize.xs`,
      color: twinTheme`colors.slate[200]`,
    },
  },
});

const overrides = (theme: Theme): Components => ({
  MuiAutocomplete: {
    styleOverrides: {
      noOptions: {
        color: twinTheme`colors.slate[200]`,
      },
    },
  },
  MuiListItem: {
    styleOverrides: {
      root: {
        '&:hover': {
          backgroundColor: twinTheme`colors.slate[700]`,
          cursor: 'pointer',
        },
      },
    },
  },
  MuiSvgIcon: {
    styleOverrides: {
      root: {
        color: twinTheme`colors.slate[200]`,
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundColor: twinTheme`colors.slate[800]`,
      },
    },
  },
  MuiDivider: {
    styleOverrides: {
      root: {
        backgroundColor: twinTheme`colors.slate[600]`,
      },
    },
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: {
        minWidth: 40,
      },
    },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        background: twinTheme`colors.slate[700]`,
      },
      arrow: {
        color: twinTheme`colors.slate[700]`,
      },
    },
  },
  MuiTabs: {
    defaultProps: {
      TabIndicatorProps: {
        children: createElement('span', null),
      },
    },
    styleOverrides: {
      indicator: {
        display: 'flex',
        justifyContent: 'center',
        '& > span': {
          width: '100%',
          backgroundColor: twinTheme`colors.slate[200]`,
          backgroundSize: '100%',
          borderRight: twinTheme`borderRadius.full`,
        },
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        color: twinTheme`colors.slate[200]`,
        background: 'transparent',
        '&:focus': {
          opacity: 1,
        },
        '& > span': {
          alignItems: 'start',
        },
        [theme.breakpoints.up('sm')]: {
          minWidth: 0,
        },
        '&.MuiTab-textColorPrimary': {
          color: twinTheme`colors.slate[200]`,
        },
      },
    },
  },
  MuiSnackbar: {
    styleOverrides: {
      root: {
        boxShadow: theme.shadows[8],
        borderRadius: theme.shape.borderRadius,
      },
    },
  },
  MuiAlert: {
    variants: [
      {
        props: { variant: 'filled' },
        style: {
          color: theme.palette.primary.contrastText,
          backgroundColor: twinTheme`colors.slate.800`,
        },
      },
    ],
    styleOverrides: {
      root: {
        alignItems: 'center',
      },
    },
  },
});

export default createTheme({
  ...appTheme,
  components: overrides(appTheme),
});
