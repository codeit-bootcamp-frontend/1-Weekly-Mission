export default function calcCreateTime(createdAt) {
  const currentDate = new Date();
  const timeDifference = currentDate - createdAt;
  const minutesDifference = Math.floor(timeDifference / (1000 * 60));
  const hoursDifference = Math.floor(minutesDifference / 60);
  const daysDifference = Math.floor(hoursDifference / 24);
  const monthsDifference = Math.floor(daysDifference / 30);
  const yearsDifference = Math.floor(monthsDifference / 12);

  if (minutesDifference < 2) {
    return '1 minute ago';
  }
  if (minutesDifference <= 59) {
    return `${minutesDifference} minutes ago`;
  }
  if (hoursDifference < 2) {
    return '1 hour ago';
  }
  if (hoursDifference <= 23) {
    return `${hoursDifference} hours ago`;
  }
  if (daysDifference < 2) {
    return '1 day ago';
  }
  if (daysDifference <= 30) {
    return `${daysDifference} days ago`;
  }
  if (monthsDifference < 2) {
    return '1 month ago';
  }
  if (monthsDifference <= 11) {
    return `${monthsDifference} months ago`;
  }
  if (yearsDifference < 2) {
    return '1 year ago';
  }
  return `${yearsDifference} years ago`;
}
