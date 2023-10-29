import { TIME_IN_MILLISECONDS } from "./constant";

export const parseDatestring = (targetDate) => {
  const changedDate = new Date(targetDate);
  const year = changedDate.getFullYear();
  const month = changedDate.getMonth() + 1;
  const day = changedDate.getDate();
  const hour = changedDate.getHours();
  const minutes = changedDate.getMinutes();
  return {
    year: year,
    month: month,
    day: day,
    hour: hour,
    minutes: minutes,
  };
};

export const getElapsedTime = (createdAt) => {
  const now = new Date();
  const createdAtDate = new Date(createdAt);
  const elapsedTime = now - createdAtDate;
  const { minute, hour, day, month, year } = TIME_IN_MILLISECONDS;

  if (year * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / year)} years ago`;
  }
  if (year <= elapsedTime) {
    return `1 year ago`;
  }
  if (month * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / month)} months ago`;
  }
  if (month <= elapsedTime) {
    return `1 month ago`;
  }
  if (day * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / day)} days ago`;
  }
  if (day <= elapsedTime) {
    return `1 day ago`;
  }
  if (hour * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / hour)} hours ago`;
  }
  if (hour <= elapsedTime) {
    return `1 hour ago`;
  }
  if (minute * 2 <= elapsedTime) {
    return `${Math.floor(elapsedTime / minute)} minutes ago`;
  }
  return `1 minute ago`;
};
