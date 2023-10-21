export function dateCalculator(apiDate) {
  let myDate = new Date();
  let elapsedMinute = Math.floor((myDate - apiDate) / 1000 / 60);
  let elapsedHour = Math.floor((myDate - apiDate) / 1000 / 60 / 60);
  let elapsedDays = Math.floor((myDate - apiDate) / 1000 / 60 / 60 / 24);
  let elapsedMonth = Math.floor((myDate - apiDate) / 1000 / 60 / 60 / 24 / 31);
  let elapsedYear = Math.floor(
    (myDate - apiDate) / 1000 / 60 / 60 / 24 / 31 / 12
  );

  if (elapsedMinute < 60) {
    if (elapsedMinute < 2) {
      return `${elapsedMinute} minute ago`;
    }
    return `${elapsedMinute} minutes ago`;
  }
  if (elapsedHour < 24) {
    if (elapsedHour < 2) {
      return `${elapsedHour} hour ago`;
    }
    return `${elapsedHour} hours ago`;
  }
  if (elapsedDays < 31) {
    if (elapsedDays < 2) {
      return `${elapsedDays} day ago`;
    }
    return `${elapsedDays} days ago`;
  }
  if (elapsedMonth < 12) {
    if (elapsedMonth < 2) {
      return `${elapsedMonth} month ago`;
    }
    return `${elapsedMonth} months ago`;
  }
  if (elapsedYear) {
    if (elapsedYear < 2) {
      return `${elapsedYear} year ago`;
    }
    return `${elapsedYear} years ago`;
  }
}
