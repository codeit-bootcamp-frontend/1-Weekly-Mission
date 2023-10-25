export function calculateRelativeTime(createdAt) {
  const currentTime = new Date();
  const createdTime = new Date(createdAt);
  const timeDifference = currentTime - createdTime;
  const minutes = Math.floor(timeDifference / (1000 * 60));

  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  let timeAgo;

  if (minutes < 2) {
    timeAgo = "1 minute ago";
  } else if (minutes <= 59) {
    timeAgo = `${minutes} minutes ago`;
  } else if (hours < 2) {
    timeAgo = "1 hour ago";
  } else if (hours <= 23) {
    timeAgo = `${hours} hours ago`;
  } else if (days < 2) {
    timeAgo = "1 day ago";
  } else if (days <= 30) {
    timeAgo = `${days} days ago`;
  } else if (months < 2) {
    timeAgo = "1 month ago";
  } else if (months <= 11) {
    timeAgo = `${months} months ago`;
  } else if (years < 2) {
    timeAgo = "1 year ago";
  } else {
    timeAgo = `${years} years ago`;
  }

  return timeAgo;
}

export function formatDate(val) {
  const date = new Date(val);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()} `;
}
