function getTimeDiff(value) {
  const milliSeconds = new Date() - value;
  const seconds = milliSeconds / 1000;

  if (seconds < 60) return `방금 전`;
  const minutes = seconds / 60;
  if (minutes < 60)
    return `${Math.floor(minutes)}${
      Math.floor(minutes) > 1 ? "minutes ago" : "minute ago"
    }`;
  const hours = minutes / 60;
  if (hours < 24)
    return `${Math.floor(hours)}${
      Math.floor(hours) > 1 ? "hours ago" : "hour ago"
    }`;
  const days = hours / 24;
  if (days < 7)
    return `${Math.floor(days)}${
      Math.floor(days) > 1 ? "days ago" : "day ago"
    }`;
  const weeks = days / 7;
  if (weeks < 5)
    return `${Math.floor(weeks)}${
      Math.floor(weeks) > 1 ? "weeks ago" : "week ago"
    }`;
  const months = days / 30;
  if (months < 12)
    return `${Math.floor(months)}${
      Math.floor(months) > 1 ? "months ago" : "month ago"
    }`;
  const years = days / 365;
  return `${Math.floor(years)}${
    Math.floor(years) > 1 ? "years ago" : "year ago"
  }`;
}

export default getTimeDiff;
