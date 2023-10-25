function TimeFlow({ createdAt }) {
  let message = '';
  const timeMinute = (new Date() - new Date(createdAt)) / 1000 / 60;
  const timeHour = Math.floor(timeMinute / 60);
  const timeDay = Math.floor(timeHour / 24);
  const timeMonth = Math.floor(timeDay / 30);
  const timeYear = Math.floor(timeMonth / 12);

  switch (true) {
    case timeMinute < 2:
      message = '1 minute ago';
      break;
    case timeMinute < 60:
      message = `${timeMinute} minutes ago`;
      break;
    case timeHour < 2:
      message = '1 hour ago';
      break;
    case timeHour < 24:
      message = `${timeHour} hours ago`;
      break;
    case timeDay < 2:
      message = `1 day ago`;
      break;
    case timeDay < 31:
      message = `${timeDay} days ago`;
      break;
    case timeMonth < 2:
      message = `1 month ago`;
      break;
    case timeMonth < 12:
      message = `${timeMonth} months ago`;
      break;
    case timeYear < 2:
      message = `1 year ago`;
      break;
    case timeYear >= 2:
      message = `${timeYear} years ago`;
      break;
    default:
      message = '계산중입니다...';
  }
  return <div className="timediff">{message}</div>;
}

export default TimeFlow;
