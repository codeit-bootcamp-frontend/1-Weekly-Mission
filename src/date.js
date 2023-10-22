export function timeForToday(value) {
  const today = new Date();
  const timeValue = new Date(value);

  const betweenTime = Math.floor(
    (today.getTime() - timeValue.getTime()) / 1000 / 60
  );

  if (betweenTime < 2) return "1 minute ago";

  if (betweenTime < 60) {
    return `${betweenTime}minute ago`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour >= 1 && betweenTimeHour < 24) {
    return `${betweenTimeHour} hour ago`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay <= 30) {
    return `${betweenTimeDay} days ago`;
  }

  const betweenTimeMonth = Math.floor(betweenTime / 60 / 24 / 30);
  if (betweenTimeMonth >= 1 && betweenTimeMonth <= 11) {
    return `${betweenTimeMonth} month ago`;
  }
  if (betweenTimeMonth >= 12) {
    return `${Math.floor(betweenTimeDay / 365)}year ago`;
  }
}

export function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}
