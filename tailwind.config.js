const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  plugins: [require('@tailwindcss/line-clamp')],
  purge: {
    enabled: false,
  },
  theme: {
    fontFamily: {
      sans: ['Noto Sans', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      // colors: {},
      container: (theme) => ({
        center: true,
        padding: {
          DEFAULT: theme('spacing.4'),
          sm: theme('spacing.5'),
          lg: theme('spacing.6'),
          xl: theme('spacing.8'),
        },
        screens: {
          sm: '640px',
          md: '960px',
          lg: '1280px',
          xl: '1600px',
        },
        animation: {
          appear: 'appear 500ms ease-in-out forwards',
          disappear: 'disappear 500ms ease-in-out forwards',
          'slide-down': 'slideY 250ms ease-out',
        },
        keyframes: {
          slideY: {
            '0%': { transform: 'translateY(-120%)' },
            '100%': { transform: 'translateY(0%)' },
          },
          appear: {
            to: { opacity: 'var(--appear-opacity)' },
          },
          disappear: {
            to: { opacity: 0 },
          },
        },
      }),
    },
  },
};
