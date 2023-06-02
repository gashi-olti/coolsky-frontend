import { Box, CircularProgress } from '@mui/material';

interface Props {
  sx?: Object;
}

export default function LoadingSpinner({ sx }: Props) {
  return (
    <div tw="relative w-full h-full">
      <Box
        sx={{
          width: 1,
          height: 1,
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CircularProgress size={45} sx={sx} />
      </Box>
    </div>
  );
}
