import { format, formatDistanceToNowStrict } from 'date-fns';

const dateFormat = timeValue => {
  return format(new Date(timeValue), 'yyyy. MM. dd');
};

const dateConvert = timeValue => {
  const distance = formatDistanceToNowStrict(new Date(timeValue));
  return distance + ' ago';
};

export { dateFormat, dateConvert };
