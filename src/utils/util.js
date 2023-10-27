function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function formatDateDiff(value) {
  const date = new Date(value);
  const now = new Date();

  const diffMilliseconds = now - date;
  const diffMinutes = diffMilliseconds / (1000 * 60);
  let message = '';

  if (diffMinutes < 2) {
    message = '1 minute ago';
  } else if (diffMinutes <= 59) {
    message = `${Math.floor(diffMinutes)} minutes ago`;
  } else if (diffMinutes < 60 * 24) {
    const diffHours = Math.floor(diffMinutes / 60);
    message = diffHours === 1 ? '1 hour ago' : `${diffHours} hours ago`;
  } else if (diffMinutes <= 60 * 24 * 30) {
    const diffDays = Math.floor(diffMinutes / (60 * 24));
    message = diffDays === 1 ? '1 day ago' : `${diffDays} days ago`;
  } else if (diffMinutes <= 60 * 24 * 365) {
    const diffMonths = Math.floor(diffMinutes / (60 * 24 * 30));
    message = diffMonths === 1 ? '1 month ago' : `${diffMonths} months ago`;
  } else {
    const diffYears = Math.floor(diffMinutes / (60 * 24 * 365));
    message = diffYears === 1 ? '1 year ago' : `${diffYears} years ago`;
  }

  return message;
}

export { formatDate, formatDateDiff };
