import { DateTime } from 'luxon';

export const formatDate = (value: string) => {
  let date: any = '';
  let time: any = '';

  if (value.includes(' ')) {
    date = value.split(' ');
    time = date[1].split(':');

    const fullDate = DateTime.fromFormat(date[0], 'yyyy-LL-dd').set({
      hour: Number(time[0]),
      minute: Number(time[1]),
    });

    return fullDate.toFormat('LLL dd, HH:mm');
  }

  date = value;

  const formatedDate = DateTime.fromFormat(date, 'yyyy-LL-dd').set({
    hour: 1,
    minute: 0,
  });

  return `${formatedDate.weekdayLong}, ${formatedDate.monthLong} ${formatedDate.day}`;
};
