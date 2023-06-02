import * as React from 'react';
import {
  Button,
  Dialog,
  Typography,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
} from '@mui/material';

type Props = {
  title?: string;
  content: string;
  buttonDisabled?: boolean;
  confirmationButtonText?: string;
  hideCancel?: boolean;
  isLoading?: boolean;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  open: boolean;
  onConfirm: () => Promise<void>;
  onClose: (event: {}, reason?: 'backdropClick' | 'escapeKeyDown') => void;
};

export default function ActionDialog({
  title,
  content,
  buttonDisabled = false,
  confirmationButtonText,
  hideCancel = false,
  isLoading = false,
  maxWidth = 'xs',
  open,
  onConfirm,
  onClose,
}: Props) {
  return (
    <Dialog open={open} maxWidth={maxWidth} onClose={onClose} aria-labelledby="action-dialog">
      <div tw="w-full p-4 flex flex-col">
        <div tw="flex flex-col overflow-auto">
          <DialogTitle>
            <Typography variant="h2" component="span">
              {title}
            </Typography>
          </DialogTitle>
          <DialogContent>
            <div tw="text-left">{content}</div>
          </DialogContent>
        </div>
        <DialogActions>
          {!hideCancel && (
            <Button variant="text" onClick={onClose}>
              Cancel
            </Button>
          )}
          <Button variant="contained" color="primary" disabled={buttonDisabled} onClick={onConfirm}>
            {confirmationButtonText} ?? Ok
            {isLoading && <CircularProgress size={16} />}
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  );
}
