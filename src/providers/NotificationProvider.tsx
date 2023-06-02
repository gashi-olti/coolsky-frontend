import * as React from 'react';
import { AlertColor } from '@mui/material';

import SnackbarNotification from '@/components/SnackbarNotification';

type SnackbarTypes = AlertColor;

interface SnackType {
  key?: string;
  message: string;
  type?: AlertColor;
  open: boolean;
}

export const NotificationContext = React.createContext<{
  openSnackbar: (message: string, type?: SnackbarTypes) => void;
  closeSnackbar: (key: string) => void;
}>({
  openSnackbar: () => null,
  closeSnackbar: () => null,
});

export const useNotification = () => React.useContext(NotificationContext);

export function NotificationProvider({ children }: React.PropsWithChildren<any>) {
  const [snacks, setSnacks] = React.useState<SnackType[]>([]);

  const componentUnmounted = React.useRef<boolean>();

  React.useEffect(() => {
    componentUnmounted.current = true;
    return () => {
      componentUnmounted.current = false;
    };
  });

  const closeSnackbar = React.useCallback(
    (key: string) =>
      setSnacks((existingSnacks: any) => existingSnacks.filter((item: any) => item.key !== key)),
    []
  );

  const openSnackbar = React.useCallback((message: string, type?: SnackbarTypes) => {
    const key = (new Date().getMilliseconds() + Math.random()).toString();
    const snack: SnackType = {
      key,
      message,
      open: true,
      type,
    };
    setSnacks((existingSnacks) => [...existingSnacks, snack]);
  }, []);

  const value = React.useMemo(
    () => ({
      openSnackbar,
      closeSnackbar,
    }),
    [openSnackbar, closeSnackbar]
  );

  return (
    <NotificationContext.Provider value={value}>
      {children}
      {snacks.length > 0 &&
        snacks.map((snack) => (
          <SnackbarNotification
            key={snack.key}
            id={snack.key}
            message={snack.message}
            open={snack.open}
            type={snack.type}
            onClose={() => {
              closeSnackbar(snack.key!);
            }}
          />
        ))}
    </NotificationContext.Provider>
  );
}
