import moment from "moment";

// day.js 써보기
export function timeForToday(createdAt) {
  const today = moment();
  const createdTime = moment(createdAt);

  today.format();

  // 2분 미만은 “1 minute ago”
  // 60분 미만은 “OO minutes ago”
  // 60분 이상은 “1 hour ago”
  // 24시간 미만은 “OO hours ago”
  // 24시간 이상은 “1 day ago”
  // 1달 미만은 “OO days ago”
  // 1달 이상은 “1 month ago”
  // 1년 미만은 “OO months ago”
  // 1년 이상은 “1 year ago”
  // OO달 이상은 “{OO/12(소수점 버린 정수)} years ago”

  const diffYears = today.diff(createdTime, "years");
  const diffMonths = today.diff(createdTime, "months");
  const diffDays = today.diff(createdTime, "days");
  const diffHours = today.diff(createdTime, "hours");
  const diffMins = today.diff(createdTime, "minutes");

  if (diffMins < 2) return "1 minute ago";
  if (diffMins < 60) return `${diffMins} minutes ago`;
  if (60 <= diffMins && diffHours < 2) return "1 hour ago";
  if (diffHours < 24) return `${diffHours} hours ago`;
  if (24 <= diffHours && diffDays < 2) return "1 day ago";
  if (diffMonths < 1) return `${diffDays} days ago`;
  if (1 <= diffMonths && diffMonths < 2) return "1 month ago";
  if (diffYears < 1) return `${diffMonths} months ago`;
  if (1 <= diffYears) return "1 year ago";
  return `${diffYears} years ago`;
}
