import * as React from 'react';
import { Container, useTheme } from '@mui/material';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

type Props = {
  children: NonNullable<React.ReactNode>;
  spacing?: number;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
};

export default function Layout({ children, spacing = 0, maxWidth = false }: Props) {
  const theme = useTheme();

  return (
    <div tw="flex flex-col h-screen">
      <Header />
      <Container
        disableGutters
        tw="flex-grow"
        maxWidth={maxWidth}
        sx={[
          spacing > 0 && {
            padding: theme.spacing(spacing, 0),
          },
        ]}
      >
        {children}
      </Container>
      <Footer />
    </div>
  );
}
