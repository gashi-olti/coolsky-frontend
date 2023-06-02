import React from 'react';

export type TemperatureUnitType = 'celcius' | 'fahrenheit';

interface TemperatureUnitContextValue {
  temperatureUnit: TemperatureUnitType;
  handleTempUnitChange: (value: TemperatureUnitType) => void;
}

export const TemperatureUnitContext = React.createContext<TemperatureUnitContextValue>({
  temperatureUnit: 'celcius',
  handleTempUnitChange: () => {},
});

type TemperatureUnitProviderProps = {
  children: React.ReactNode;
};

export const useTemperatureUnit = () => React.useContext(TemperatureUnitContext);

export const TemperatureUnitProvider = ({ children }: TemperatureUnitProviderProps) => {
  const [temperatureUnit, setTemperatureUnit] = React.useState<TemperatureUnitType>('celcius');

  const handleTempUnitChange = (value: TemperatureUnitType) => {
    setTemperatureUnit(value);
  };

  const value = { temperatureUnit, handleTempUnitChange };

  return (
    <TemperatureUnitContext.Provider value={value}>{children}</TemperatureUnitContext.Provider>
  );
};
