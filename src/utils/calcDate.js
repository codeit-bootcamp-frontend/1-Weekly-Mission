function calcDate(value) {
  const now = new Date(); // 현재 날짜 및 시간
  const createdDate = new Date(value);

  let minutes = (now - createdDate) / 1000 / 60;
  if (minutes < 2) {
    return `1 minute ago`;
  } else if (minutes < 60) {
    return `${Math.floor(minutes)} minutes ago`;
  }

  let hours = minutes / 60;
  if (hours < 2) {
    return `1 hour ago`;
  } else if (hours < 24) {
    return `${Math.floor(hours)} hours ago`;
  }

  let days = hours / 24;
  if (days < 2) {
    return `1 day ago`;
  } else if (days < 31) {
    return `${Math.floor(days)} days ago`;
  }

  let months = days / 31;
  if (months < 2) {
    return `1 month ago`;
  } else if (months < 12) {
    return `${Math.floor(months)} months ago`;
  }

  let years = months / 12;
  if (years < 2) {
    return `1 year ago`;
  } else {
    return `${Math.floor(years)} years ago`;
  }
}

export default calcDate;
