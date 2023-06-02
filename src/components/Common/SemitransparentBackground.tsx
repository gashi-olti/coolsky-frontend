import React from 'react';
import { Box, BoxProps } from '@mui/material';

interface Props {
  other?: BoxProps;
  dark?: number;
  children: React.ReactNode;
}

export default function SemitransparentBackground({ children, dark = 0.5, other }: Props) {
  return (
    <Box
      sx={{
        backgroundColor: `rgba(0, 0, 0, ${dark})`,
        borderRadius: 1,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}
