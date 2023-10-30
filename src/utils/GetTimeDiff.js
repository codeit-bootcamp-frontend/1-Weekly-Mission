function GetTimeDiff(value) {
  const milliSeconds = new Date() - value;
  const seconds = milliSeconds / 1000;

  if (seconds < 60) {
    return `1 minute ago`;
  }

  const minutes = seconds / 60;
  if (minutes <= 59) {
    return `${Math.floor(minutes)} ${
      Math.floor(minutes) > 1 ? "minutes ago" : "minute ago"
    }`;
  }

  const hours = minutes / 60;
  if (hours <= 23) {
    return `${Math.floor(hours)} ${
      Math.floor(hours) > 1 ? "hours ago" : "hour ago"
    }`;
  }

  const days = hours / 24;
  if (days <= 30) {
    return `${Math.floor(days)} ${
      Math.floor(days) > 1 ? "days ago" : "day ago"
    }`;
  }

  const months = days / 30;
  if (months <= 11) {
    return `${Math.floor(months)} ${
      Math.floor(months) > 1 ? "months ago" : "month ago"
    }`;
  }

  const years = months / 12;
  if (years < 1) {
    return `1 year ago`;
  }

  return `${Math.floor(years)} years ago`;
}

export default GetTimeDiff;
