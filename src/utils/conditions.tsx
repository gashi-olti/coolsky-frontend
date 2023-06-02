interface ConditionModel {
  isDay: number;
  condition: string;
  icon?: string;
  videoSrc?: string;
}

export const conditions: ConditionModel[] = [
  {
    isDay: 0,
    condition: 'Clear',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/clear_night_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Sunny',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/sunny_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Partly cloudy',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/partly_cloudy_night_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Partly cloudy',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/partly_cloudy_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Cloudy',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/cloudy_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Cloudy',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/cloudy_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Overcast',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/mostly_cloudy_night_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Overcast',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/mostly_cloudy_day_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Mist',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/haze_fog_dust_smoke_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Mist',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/haze_fog_dust_smoke_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Patchy rain possible',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/scattered_showers_night_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Patchy rain possible',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/scattered_showers_day_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Patchy snow possible',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/flurries_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Patchy snow possible',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/flurries_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Patchy sleet possible',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/wintry_mix_rain_snow_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Patchy sleet possible',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/wintry_mix_rain_snow_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Patchy freezing drizzle possible',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/drizzle_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Patchy freezing drizzle possible',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/drizzle_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Thundery outbreaks possible',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/isolated_scattered_tstorms_night_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Thundery outbreaks possible',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/isolated_scattered_tstorms_day_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Blowing snow',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/blizzard_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Blowing snow',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/blizzard_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Blizzard',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/blizzard_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Blizzard',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/blizzard_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Fog',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/haze_fog_dust_smoke_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Fog',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/haze_fog_dust_smoke_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Patchy light drizzle',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/drizzle_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Patchy light drizzle',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/drizzle_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Light drizzle',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/drizzle_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Light drizzle',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/drizzle_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Freezing drizzle',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/showers_rain_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Freezing drizzle',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/showers_rain_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Heavy freezing drizzle',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/heavy_rain_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Heavy freezing drizzle',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/heavy_rain_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Patchy light rain',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/drizzle_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Patchy light rain',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/drizzle_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Light rain',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/drizzle_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Light rain',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/drizzle_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Moderate rain at times',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/showers_rain_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Moderate rain at times',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/showers_rain_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Moderate rain',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/showers_rain_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Moderate rain',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/showers_rain_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Heavy rain at times',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/heavy_rain_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Heavy rain at times',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/heavy_rain_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Heavy rain',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/heavy_rain_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Heavy rain',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/heavy_rain_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Light freezing rain',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/drizzle_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Light freezing rain',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/drizzle_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Moderate or heavy freezing rain',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/showers_rain_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Moderate or heavy freezing rain',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/showers_rain_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Light sleet',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/drizzle_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Light sleet',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/drizzle_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Moderate or heavy sleet',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/showers_rain_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Moderate or heavy sleet',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/showers_rain_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Patchy light snow',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/flurries_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Patchy light snow',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/flurries_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Light snow',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/flurries_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Light snow',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/flurries_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Patchy moderate snow',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/flurries_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Patchy moderate snow',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/flurries_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Moderate snow',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/flurries_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Moderate snow',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/flurries_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Patchy heavy snow',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/snow_showers_snow_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Patchy heavy snow',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/snow_showers_snow_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Heavy snow',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/snow_showers_snow_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Heavy snow',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/snow_showers_snow_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Ice pellets',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/drizzle_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Ice pellets',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/drizzle_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Light rain shower',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/drizzle_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Light rain shower',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/drizzle_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Moderate or heavy rain shower',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/showers_rain_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Moderate or heavy rain shower',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/showers_rain_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Torrential rain shower',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/heavy_rain_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Torrential rain shower',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/heavy_rain_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Light sleet showers',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/drizzle_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Light sleet showers',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/drizzle_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Moderate or heavy sleet showers',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/showers_rain_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Moderate or heavy sleet showers',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/showers_rain_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Light snow showers',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/flurries_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Light snow showers',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/flurries_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Moderate or heavy snow showers',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/snow_showers_snow_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Moderate or heavy snow showers',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/snow_showers_snow_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Light showers of ice pellets',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/flurries_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Light showers of ice pellets',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/flurries_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Moderate or heavy sleet showers',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/showers_rain_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Moderate or heavy sleet showers',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/showers_rain_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Patchy light rain with thunder',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/isolated_scattered_tstorms_night_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Patchy light rain with thunder',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/isolated_scattered_tstorms_day_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Moderate or heavy rain with thunder',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/strong_tstorms_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Moderate or heavy rain with thunder',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/strong_tstorms_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Patchy light snow with thunder',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/isolated_scattered_tstorms_night_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Patchy light snow with thunder',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/isolated_scattered_tstorms_day_dark_color_96dp.png',
  },
  {
    isDay: 0,
    condition: 'Moderate or heavy snow with thunder',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/isolated_scattered_tstorms_night_dark_color_96dp.png',
  },
  {
    isDay: 1,
    condition: 'Moderate or heavy snow with thunder',
    icon: 'http://www.gstatic.com/images/icons/material/apps/weather/2x/isolated_scattered_tstorms_day_dark_color_96dp.png',
  },
];
