export function getCreatedDate(value: string) {
  const date = new Date(value);
  const yyyy = date.getFullYear();
  const mm = date.getMonth() + 1;
  const dd = date.getDate().toString().padStart(2, "0");

  return { yyyy, mm, dd };
}

export function getDiffTime(value: string) {
  const today = new Date();
  const timeValue = new Date(value);

  const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000);

  const betweeTimeMinutes = Math.floor(betweenTime) / 60;
  if (betweeTimeMinutes <= 1) return "1 minute ago";
  if (betweeTimeMinutes < 60) return `${betweenTime} minutes ago`;

  const betweenTimeHour = Math.floor(betweeTimeMinutes / 60);
  if (betweenTimeHour <= 1) return `${betweenTimeHour} hour ago`;
  if (betweenTimeHour < 24) return `${betweenTimeHour} hours ago`;

  const betweenTimeDay = Math.floor(betweenTimeHour / 24);
  if (betweenTimeDay <= 1) return "1 day ago";
  if (betweenTimeDay < 31) return `${betweenTimeDay} days ago`;

  const betweenTimeMonth = Math.floor(betweenTimeDay / 30);
  if (betweenTimeMonth <= 1) return "1 month ago";
  if (betweenTimeMonth < 12) return `${betweenTimeMonth} months ago`;

  if (betweenTimeMonth < 13) {
    return "1 year ago";
  } else {
    return `${Math.floor(betweenTimeDay / 365)} years ago`;
  }
}
