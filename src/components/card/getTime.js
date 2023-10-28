export const getTimeDiff = (value) => {
  const timeMinute = (Date.now() - new Date(value)) / 1000 / 60;
  const timeHour = Math.floor(timeMinute / 60);
  const timeDay = Math.floor(timeHour / 24);
  const timeMonth = Math.floor(timeDay / 30);
  const timeYear = Math.floor(timeMonth / 12);

  if (timeMinute < 1) {
    return "1 minute ago";
  } else if (timeHour < 1) {
    return `${timeMinute} minutes ago`;
  } else if (timeDay < 1) {
    return `${timeHour} hours ago`;
  } else if (timeMonth < 1) {
    return `${timeDay} days ago`;
  } else if (timeYear < 1) {
    return `${timeMonth} months ago`;
  } else {
    return timeYear === 1 ? "1 year ago" : `${timeYear} years ago`;
  }
};

export const formatDate = (value) => {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
};
