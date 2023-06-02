import * as React from 'react';

export interface GeoLocation {
  latitude: number;
  longitude: number;
}

export default function useGetLocation() {
  const [geoLocation, setGeoLocation] = React.useState<GeoLocation | undefined>(undefined);

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((positon) => {
      setGeoLocation({
        latitude: positon.coords.latitude,
        longitude: positon.coords.longitude,
      });
    });
  }, []);

  return {
    geoLocation,
  };
}
