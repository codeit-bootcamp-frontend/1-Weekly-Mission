export function formatDate(date) {
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}
function getTimeDiff(createdAt) {
  const now = new Date();
  return Math.floor((now - createdAt) / (1000 * 60)); //분단위
}
export function prettyFormatTimeDiff(createdAt) {
  const timeDiff = getTimeDiff(createdAt);
  if (timeDiff < 2) return "1 minute ago";
  if (timeDiff <= 59) return `${timeDiff} minutes ago`;
  if (timeDiff < 2 * 60) return `1 hour ago`;
  if (timeDiff <= 60 * 23) return `${Math.floor(timeDiff / 60)} hours ago`;
  if (timeDiff < 60 * 25) return `1 day ago`;
  if (timeDiff <= 60 * 24 * 30)
    return `${Math.floor(timeDiff / (60 * 24))} days ago`;
  if (timeDiff < 60 * 24 * 32) return `1 month ago`;
  if (timeDiff <= 60 * 24 * 31 * 11)
    return `${Math.floor(timeDiff / (60 * 24 * 31))} months ago`;
  if (timeDiff < 60 * 24 * 31 * 13) return `1 year ago`;
  return `${Math.floor(timeDiff / (60 * 24 * 31 * 12))} years ago`;
}
