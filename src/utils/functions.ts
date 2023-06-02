export const getUvIndexLevel = (value: number) => {
  if (value > 2) {
    return 'Medium';
  } else if (value > 5) {
    return 'High';
  } else if (value > 7) {
    return 'Very high';
  } else if (value > 10) {
    return 'Extremely high';
  } else {
    return 'Low';
  }
};
