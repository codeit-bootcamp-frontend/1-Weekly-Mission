export function changeDateTime(createdAt) {
  function leapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  const currentDate = new Date();
  const apiDate = new Date(createdAt);

  const timeGap = currentDate - apiDate;

  const resultDate = new Date(timeGap);
  let year = resultDate.getFullYear();

  const month = resultDate.getMonth();
  const date = resultDate.getDate() - 1;

  const hour = resultDate.getHours();
  const minutes = resultDate.getMinutes();

  if (leapYear(year)) {
    year += 1;
  }

  if (year > 1970) {
    return `${year - 1970} years ago`;
  }

  switch (year === 1970) {
    case month >= 12:
      return '1 year ago';
    case month > 0 && month <= 11:
      return `${month} months ago`;
    case date >= 31:
      return '1 month ago';
    case date > 0 && date <= 30:
      return `${date} days ago`;
    case hour >= 24:
      return '1 day ago';
    case hour > 0 && hour <= 23:
      return `${hour} hours ago`;
    case minutes >= 60:
      return '1 hour ago';
    case minutes > 0 && minutes <= 59:
      return `${minutes} minutes ago`;
    case minutes < 2:
      return '1 minute ago';
    default:
      return;
  }
}

export function changeDate(createdAt) {
  const createDate = new Date(createdAt);

  const year = createDate.getFullYear();
  const month = createDate.getMonth();
  const day = createDate.getDate();

  const formattedDate = `${year}. ${month}. ${day}`;

  return formattedDate;
}
