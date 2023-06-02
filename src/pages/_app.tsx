import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { EmotionCache } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { SWRConfig } from 'swr';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';

import createEmotionCache from '@/utils/createEmotionCache';
import Api from '@/lib/api';
import StylesGlobal from '@/components/GlobalStyles';
import theme from '@/config/theme';
import { TemperatureUnitProvider } from '@/providers/TemperatureUnitProvider';
import { NotificationProvider } from '@/providers/NotificationProvider';

const clientSideEmotionCache = createEmotionCache();

interface CsAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function App(props: CsAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <>
      <SWRConfig value={{ fetcher: Api.get }}>
        <CacheProvider value={emotionCache}>
          <MuiThemeProvider theme={theme}>
            <StylesGlobal />
            <TemperatureUnitProvider>
              <NotificationProvider>
                <Component {...pageProps} />
              </NotificationProvider>
            </TemperatureUnitProvider>
          </MuiThemeProvider>
        </CacheProvider>
      </SWRConfig>
    </>
  );
}

export default appWithTranslation(App);
