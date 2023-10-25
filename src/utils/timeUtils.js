const timeDifference = (current, previous) => {
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const elapsed = current - previous;

  if (elapsed < msPerMinute) {
    return "1 minute ago";
  }
  if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + " minutes ago";
  }
  if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + " hours ago";
  }
  if (elapsed < msPerMonth) {
    return Math.round(elapsed / msPerDay) + " days ago";
  }
  if (elapsed < msPerYear) {
    return Math.round(elapsed / msPerMonth) + " months ago";
  }

  const years = Math.floor(elapsed / msPerYear);
  if (years === 1) {
    return "1 year ago";
  } else {
    return years + " years ago";
  }
};

export { timeDifference };
