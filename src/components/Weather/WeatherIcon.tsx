import React, { FC } from 'react';

import { conditions } from '@/utils/conditions';
import Image from '@/components/Common/Image';

// type IconSize = 40 | 100 | 150 | 250;

type Props = {
  isDay?: number;
  condition?: string;
  // iconSize?: IconSize;
};

const WeatherIcon: FC<Props> = ({ isDay, condition }) => {
  if (condition) {
    const matchedWeather = conditions.filter(
      (item) => item.isDay === isDay && item.condition === condition
    );

    return (
      <>
        {matchedWeather.map((weather, index) => (
          <Image src={weather.icon} alt={weather.condition} key={index} />
        ))}
      </>
    );
  }

  return <></>;
};

export default WeatherIcon;
