export function getTimeDifference(value: number) {
  const now: any = new Date();
  const createdDate: any = new Date(value);
  const timeDifference = now - createdDate;
  const secondDifference = Math.floor(timeDifference / 1000);

  const minuteDifference = Math.floor(secondDifference / 60);
    if (minuteDifference < 60) {
      return `${minuteDifference} minutes ago`;
    }

  const hourDifference = Math.floor(minuteDifference / 60);
  if (hourDifference < 24) {
    return `${hourDifference} hours ago`;
  }

  const dayDifference = Math.floor(hourDifference / 24);
  if (dayDifference < 30) {
    return `${dayDifference} days ago`;
  }

  const monthDifference = Math.floor(dayDifference / 30);
  if (monthDifference < 12) {
    return `${monthDifference} months ago`;
  }

  const yearDifference = Math.floor(monthDifference / 12);
  return `${yearDifference} years ago`;
  }