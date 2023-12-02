export function getTimePassed(url, description, createdAt, imageSource) {
  const createdAtDate = new Date(createdAt);
  const currentDate = new Date();
  const timeDifference = currentDate - createdAtDate;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 31);
  const years = Math.floor(months / 12);

  let timePassed = "";
  if (minutes < 2 && hours === 0) {
    timePassed = "1 minute";
  }
  if (minutes >= 2 && minutes <= 59 && hours === 0) {
    timePassed = `${minutes} minutes`;
  }
  if (minutes >= 60 && hours === 1) {
    timePassed = "1 hour";
  }
  if (hours >= 2 && hours <= 23) {
    timePassed = `${hours} hours`;
  }
  if (hours >= 24 && days === 1) {
    timePassed = "1 day";
  }
  if (days >= 2 && days <= 30) {
    timePassed = `${days} days`;
  }
  if (days >= 31 && months === 1) {
    timePassed = "1 month";
  }
  if (months >= 2 && months <= 11) {
    timePassed = `${months} months`;
  }
  if (months >= 12 && years === 1) {
    timePassed = "1 year";
  }
  if (years >= 2) {
    timePassed = `${years} years`;
  }
  return timePassed;
}
