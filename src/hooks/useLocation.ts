import * as React from 'react';

export interface LocationApi {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
}

export default function useLocation() {
  const [city, setCity] = React.useState<string>('');

  return {
    city,
    setCity,
  };
}
