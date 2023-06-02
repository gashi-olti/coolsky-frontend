import * as React from 'react';
import { Alert, AlertColor, AlertTitle, Snackbar } from '@mui/material';
import Slide, { SlideProps } from '@mui/material/Slide';
import { theme as twinTheme } from 'twin.macro';

type TransitionProps = Omit<SlideProps, 'direction'>;

function TransitionUp(props: TransitionProps) {
  return <Slide {...props} direction="up" />;
}

type Props = {
  duration?: number;
  id: string | undefined;
  message: string;
  open: boolean;
  type?: AlertColor;
  title?: string;
  onClose: () => void;
};

export default function SnackbarNotification({
  id,
  message,
  onClose,
  open = false,
  duration = 7000,
  title = '',
  type = 'success',
}: Props) {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      autoHideDuration={duration}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      key={id}
      open={open}
      onClose={onClose}
      TransitionComponent={TransitionUp}
      sx={{
        '& .MuiAlert-message': {
          fontSize: twinTheme`fontSize.sm` as string,
        },
      }}
    >
      <Alert variant="filled" severity={type} onClose={onClose}>
        {title && <AlertTitle>{title}</AlertTitle>}
        {message}
      </Alert>
    </Snackbar>
  );
}
