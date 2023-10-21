const MS_IN_MIN = 1000 * 60;
const MS_IN_HOUR = 1000 * 60 * 60;
const MS_IN_DAY = 1000 * 60 * 60 * 24;
const MS_IN_MONTH = 1000 * 60 * 60 * 24 * 30;
const MS_IN_YEAR = 1000 * 60 * 60 * 24 * 30 * 12;

export const makeDateMessage = (num, dateType) => {
  return `${num} ${dateType}${num !== 1 ? 's' : ''} ago`;
};

export const calculateTimePassed = (createdAt) => {
  const createdDay = new Date(createdAt);
  const today = new Date();

  const msDiff = today - createdDay;
  const minDiff = Math.floor(msDiff / MS_IN_MIN);
  const hourDiff = Math.floor(msDiff / MS_IN_HOUR);
  const dayDiff = Math.floor(msDiff / MS_IN_DAY);
  const monthDiff = Math.floor(msDiff / MS_IN_MONTH);
  const yearDiff = Math.floor(msDiff / MS_IN_YEAR);

  if (hourDiff === 0) {
    return makeDateMessage(minDiff, 'minute');
  } else if (dayDiff === 0) {
    return makeDateMessage(hourDiff, 'hour');
  } else if (monthDiff === 0) {
    return makeDateMessage(dayDiff, 'day');
  } else if (yearDiff === 0) {
    return makeDateMessage(monthDiff, 'month');
  } else {
    return makeDateMessage(yearDiff, 'year');
  }
};

export const getDate = (date) => {
  if (!date) return;
  const day = new Date(date);
  return `${day.getFullYear()}. ${day.getMonth() + 1}. ${day.getDate()}`;
};
